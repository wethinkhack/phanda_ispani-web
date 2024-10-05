# Phanda-Ispani

A platform that enhances access to the local job market, allowing users to discover opportunities they might not have found otherwise.

## Usage

You can view the live preview [here](https://ejmabunda.github.io/Phanda-Ispani/), or clone the repository:

```zsh | bash | sh
git clone git@github.com:ejmabunda/Phanda-Ispani.git
cd Phanda-Ispani
```

## Running the project

Since we are using Sass, you will need to install it to run the project.

```zsh | bash | sh
npm install -g sass
```

Then, run the following command to start the Sass watcher:
(This will watch the `css` directory and compile the `style.scss` file to `style.css`.)

```zsh | bash | sh
sass --watch styles/scss:styles/css
```

To run the project, make sure you have python installed and then run the following command:

```zsh | bash | sh
python -m http.server
```

Then, open your browser and navigate to `http://localhost:8000` to view the site.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
