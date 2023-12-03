# Auto-Reloader-For-Java
# Java Auto-Reload Script

This script (`auto-reload.sh` for Linux and macOS) automates the reloading of a Java GUI program whenever changes are made to the associated Java source file. It includes features for both automatic and manual reloading.

## Use Case

Developers working on Java GUI applications often need a quick and convenient way to observe the impact of code changes without manually restarting the program. This script provides an automated solution, ensuring that the Java application reloads whenever modifications are detected in the source file.

## Features

- **Automatic Reload:** The script monitors the Java source file for changes and automatically triggers the reloading of the Java program.

- **Manual Reload:** Users have the option to manually trigger a reload by entering the specified command in the console.

## Prerequisites

### Common Prerequisites

- **Java Installed:** Ensure that Java is installed on your machine, and the `java` command is available in the system PATH.

### Linux and macOS

- **Bash Shell:** The script assumes the availability of Bash. Most Linux and macOS systems come with Bash pre-installed.

# Installation

## Linux and macOS

## Manual Reload


  Getting Started:
        Clone this repository to your local machine.
        Navigate to the directory containing the auto-reload.sh script.  
  You can manually trigger a reload of the Java program by entering the command `reload` in the terminal. Follow the steps below:
    Open a terminal.
        Run the script using the following command:
        
      ```
        
          ./auto-reload.sh YourJavaFile.java
          Reloading Java process...
          {} <==  INPUT "reload" AND PRESS ENTER  
        ```   


## Customization
  Manual Reload Command: Modify the value of the $input variable to change the manual reload command.

## Dependencies
  ### Linux and macOS
      No additional dependencies are required.

# License
This project is licensed under the MIT License.
