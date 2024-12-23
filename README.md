# Node-ts-multiplication-app
A simple Node.js application written in TypeScript that generates multiplication tables based on user input from the command line.


## **🌟 Features**
-Customizable base for the multiplication table (--base or -b).
- Set a limit to specify how far the multiplication table goes (--limit or -l).
- Option to display the multiplication table in the terminal (--show or -s).
- Specify a filename for the output file (--filename or -n).
- Set a destination file where the output will be saved (--destinationfile or -d).


## **⚙️ Requirements**
- Node.js (v14 or later)
- npm (Node package manager)

## 🚀 Installation

 1. Clone this repository: 
    ```
    git clone https://github.com/lalailamas/node-ts-multiplication-app.git
    cd multiplication-app
    ```

2. Install the dependencies:
    ```
    npm install
    ```

## 📜 Usage
You can run the app and customize the multiplication table using the following commands:

Basic Command
   ```
  npx ts-node src/app.ts --base 6 -l 10
   ```
   This will generate a multiplication table for 6 up to 10.


Show the Table
   ```
  npx ts-node src/app.ts --base 6 -l 10 -s
   ```
   This will generate and display the multiplication table for 6 up to 10.

Save to a File
To save the multiplication table to a file, use the -n and -d options:

   ```
  npx ts-node src/app.ts --base 6 -n "multiplication-table" -d "output/"
   ```
   This will generate a file named multiplication-table.txt in the output/ directory.

Options
-b or --base: The base number for the multiplication table (required).
-l or --limit: The limit of the table (default is 10).
-s or --show: Whether to display the multiplication table in the terminal (default is false).
-n or --filename: The filename for the output file (optional).
-d or --destinationfile: The destination directory for the output file (optional).

Example
  ```
  npx ts-node src/app.ts --base 3 -l 5 -s -n "multiplication-table" -d "output/"
   ```

This will show the multiplication table of 3 up to 5 and save it as multiplication-table.txt in the output/ folder.

```
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
```

## 💻 Development

<!-- To run the app in development mode, follow these steps:

1. Install the TypeScript compiler: -->

## 📄 License