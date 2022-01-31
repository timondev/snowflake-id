<div id="top"></div>

<br />
<div align="center">
  <h3 align="center">Snowflake ID Generator</h3>
  <p align="center">
    ID Generator and deconstructor by TimonDEV.
    <br />
    <a href="https://github.com/timondev/sid-generator"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/timondev/sid-generator/issues">Report Bug</a>
    ·
    <a href="https://github.com/timondev/sid-generator/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

Here's an ID-Generator for you to use as an alternative system to other ID-Generators. It utilizes the power of the <a href="https://en.wikipedia.org/wiki/Snowflake_ID">Snowflake ID</a> to generate up to 4096 ids per milli-second per worker / process. A Snowflake is a 64-bit integer that consists of four elements:

timestamp | internal workerID | internal processID      | increment |
--------- | ----------------- | ---------------------   | --------- |
42 bits   | 5 bits            | 5bits                   | 12bits    |
unique    | used for clusters | used for multiprocesses | 0 to 4095 |

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a started with this project follow these simple steps.

### Prerequisites

Please use the latest version of `npm` or `yarn` to install the package.

* npm

  ```sh
  npm install npm@latest -g
  ```

* yarn
  
  ```sh
  npm install --global yarn@latest
  ```

### Installation & Usage

1. Install the package using the following command:

   ```sh
   npm install sid-generator
   ```

2. Try out the following example:

   ```js
   import { SnowflakeID } from '@timondev/snowflake-id';

   let id = SnowflakeID.generate();

   console.log(`Snowflake generated the following id ${id}`);
   ```

3. Or use it to deconstruct snowflakes:

   ```js
   import { SnowflakeID } from '@timondev/snowflake-id';

   let id = '86913608335773696';
   let snowflake = new SnowflakeID(id);

   console.log(snowflake.timestamp);
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

TimonDEV - Github: [https://github.com/timondev/sid-generator](https://github.com/timondev)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

up to this point no acknowledgments were made.

<p align="right">(<a href="#top">back to top</a>)</p>
