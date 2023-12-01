# Auto-Reloader-For-Java
# Java Auto-Reload Script

This script (`auto-reload.sh` for Linux and macOS, `auto-reload.ps1` for Windows) automates the reloading of a Java GUI program whenever changes are made to the associated Java source file. It includes features for both automatic and manual reloading.

## Use Case

Developers working on Java GUI applications often need a quick and convenient way to observe the impact of code changes without manually restarting the program. This script provides an automated solution, ensuring that the Java application reloads whenever modifications are detected in the source file.

## Features

- **Automatic Reload:** The script monitors the Java source file for changes and automatically triggers the reloading of the Java program.

- **Manual Reload:** Users have the option to manually trigger a reload by entering the specified command in the console.

- **Cross-Platform:** The script is designed to work on Linux, macOS, and Windows, providing a platform-independent solution for Java developers.

## Prerequisites

### Common Prerequisites

- **Java Installed:** Ensure that Java is installed on your machine, and the `java` command is available in the system PATH.

### Linux and macOS

- **Bash Shell:** The script assumes the availability of Bash. Most Linux and macOS systems come with Bash pre-installed.

### Windows

- **PowerShell:** PowerShell must be installed, and the execution policy should allow script execution. Run the following command to set the execution policy:
  ```powershell
  Set-ExecutionPolicy RemoteSigned

# Installation

## Linux and macOS

  Getting Started:
        Clone this repository to your local machine.
        Navigate to the directory containing the auto-reload.sh script.

  Run the Script:
    Open a terminal.
        Run the script using the following command:
        bash
        ```powershell
            
            ./auto-reload.sh YourJavaFile.java

## Windows

  Getting Started:
        Clone this repository to your local machine.
        Navigate to the directory containing the auto-reload.ps1 script.

  Run the Script:
        Open a PowerShell console as an administrator.
        Run the script using the following command:
        powershell
        ```powershell
        .\auto-reload.ps1 YourJavaFile.java

## Manual Reload

You can manually trigger a reload of the Java program by entering the command `reload` in the terminal. Follow the steps below:

```bash
  ./auto-reload.sh YourJavaFile.java
  Reloading Java process...
  {} <== INPUT "reload" AND PRESS ENTER  
``` 

## Customization

    Java File: Replace the value of the $JavaFile variable in the script with the path to your Java source file.

    Manual Reload Command: Modify the value of the $input variable to change the manual reload command.

## Dependencies
  ### Linux and macOS
      No additional dependencies are required.

  ### Windows
    PowerShell Execution Policy:
        Make sure the PowerShell execution policy allows the execution of scripts. Run the following command to set the execution policy:
        powershell
        Set-ExecutionPolicy RemoteSigned

# License
This project is licensed under the MIT License.
