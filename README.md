<h1>React App Deployment with Docker</h1>

<p>This repository provides instructions for deploying a React app using Docker. The can be done automatically from Docker Hub or manually by building a Docker image.</p>

<h2>Automatic Deployment from Docker Hub</h2>

<p>To automatically deploy the React app from Docker Hub, run the following command:</p>

<pre><code>docker run -d -p 8080:80 pradeeptraje/react-app:latest</code></pre>

<p>This command will pull the latest version of the React app image from Docker Hub and run it in a container.</p>

<h2>Manual Deployment</h2>

<p>To manually deploy the React app in a Docker container, follow these steps:</p>

<ol>
  <li>Clone the repository:</li>
<pre><code>git clone https://github.com/saineox/reactnewbuild.git
cd reactnewbuild</code></pre>

  <li>Build the Docker image:</li>
<pre><code>docker build . -t react-app</code></pre>

  <li>Run the Docker container:</li>
<pre><code>docker run -d -p 8080:80 react-app</code></pre>

  <li>Test the app:</li>

<p>Access the app by visiting <a href="http://localhost:8080">http://localhost:8080</a> in your browser.</p>

<p>Alternatively, you can also manually deploy the React app in a Docker container using the Nginx web server. Follow these steps:</p>

  <li>Clone the repository:</li>
<pre><code>git clone https://github.com/saineox/reactnewbuild.git</code></pre>

  <li>Run the Nginx Docker container:</li>
<pre><code>docker run -d -p 80:80 --name react-app nginx</code></pre>

  <li>Copy the app files to the Nginx container:</li>
<pre><code>docker cp ./reactnewbuild/. react-app:/usr/share/nginx/html</code></pre>

</ol>

<img src="https://i.imgur.com/hZoqFix.png" alt="pradeep kadam react app">
<br>
<a href="https://i.imgur.com/jIT8zsm.png"><img src="https://i.imgur.com/jIT8zsmm.jpg" alt="pradeep kadam github"></a>
