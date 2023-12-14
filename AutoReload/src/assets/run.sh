#!/bin/bash

# Check if a Java file name is provided as a command line argument
if [ -z "$1" ]; then
    echo "Usage: $0 <JavaFileName>"
    exit 1
fi

# Set the provided Java file name without the .java extension
JAVA_FILE="$1"

# Variable to store the process ID of the running Java program
JAVA_PROCESS_ID=""

# Function to run the Java file
run_file() {
    if [ -n "$JAVA_PROCESS_ID" ]; then
        echo "Reloading Java process..."
        kill -9 "$JAVA_PROCESS_ID"
    fi
    java "${JAVA_FILE}" &
    # Store the process ID of the running Java program
    JAVA_PROCESS_ID=$!
}

# Function to display differences between two versions of the file
display_diff() {
    clear  # Optional: Clear the terminal for better visibility
    if [ "$1" = true ]; then
        echo "Calling Reload Forcefully"
    else
        echo "Changes detected. Differences between previous and current versions:"
    fi
    diff -u <(echo "$PREVIOUS_CONTENT") <(echo "$CURRENT_CONTENT")
}

# Function to get initial content of the file
get_initial_content() {
    [ -e "$JAVA_FILE" ] && cat "${JAVA_FILE}" || echo ""
}

# Initial run
run_file

# Get the initial content of the file
PREVIOUS_CONTENT=$(get_initial_content)

# Watch for manual reload option
while true; do
    read -t 1 -p "" input
    if [ "$input" == "reload" ]; then
        clear  # Optional: Clear the terminal for better visibility
        display_diff true;
        run_file
        PREVIOUS_CONTENT=$(get_initial_content)
        input=""
    fi

    
    CURRENT_CONTENT=$(get_initial_content)

    # Compare previous and current content
    if [ "$CURRENT_CONTENT" != "$PREVIOUS_CONTENT" ]; then
        clear
        display_diff false;
        run_file
        PREVIOUS_CONTENT="$CURRENT_CONTENT"
    fi

    sleep 1  # Adjust the sleep duration as needed
done
