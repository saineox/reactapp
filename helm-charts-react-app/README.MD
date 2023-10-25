<h2>Section 1: Introduction and Helm Basics</h2>

<p>Helm is often referred to as the package manager for Kubernetes. It enables you to define, install, and manage even the most complex Kubernetes applications. Helm uses a packaging format called charts, which include all the resources needed to run an application, service, or a complete cloud-native stack inside Kubernetes.</p>

<p><a href="https://github.com/LondheShubham153/kubestarter/tree/main/examples/helm#what-is-helm">Learn more: What is Helm?</a></p>

<h3>How to Install Helm in Ubuntu</h3>

<p>You can install Helm on Ubuntu using the following commands:</p>

<pre><code>curl https://baltocdn.com/helm/signing.asc | gpg --dearmor | sudo tee /usr/share/keyrings/helm.gpg &gt; /dev/null
sudo apt-get install apt-transport-https --yes
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/helm.gpg] https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list
sudo apt-get update
sudo apt-get install helm
</code></pre>

<p><a href="https://github.com/LondheShubham153/kubestarter/tree/main/examples/helm#how-to-install-helm-in-ubuntu">Learn more: How to Install Helm in Ubuntu</a></p>

<h3>Important Helm Commands</h3>

<p>Here are some essential Helm commands:</p>

<ul>
    <li><code>helm create [CHART]</code>: Scaffold a new Helm chart.</li>
    <li><code>helm package [CHART]</code>: Package the chart into a chart archive.</li>
    <li><code>helm install [NAME] [CHART]</code>: Install a Helm chart.</li>
    <li><code>helm upgrade [NAME] [CHART]</code>: Upgrade an installed Helm chart.</li>
    <li><code>helm uninstall [NAME]</code>: Uninstall an installed Helm chart.</li>
    <li><code>helm list</code>: List all installed Helm charts.</li>
    <li><code>helm rollback [NAME] [REVISION]</code>: Roll back a release to a specific revision.</li>
</ul>

<p><a href="https://github.com/LondheShubham153/kubestarter/tree/main/examples/helm#important-helm-commands">Learn more: Important Helm Commands</a></p>

<h2>Section 2: Prerequisites</h2>

<p>Before you begin working with Helm, make sure you have the following prerequisites in place:</p>

<ul>
    <li>Helm installed</li>
    <li>Kubernetes cluster set up (e.g., Minikube, kind, or any cloud-based Kubernetes)</li>
    <li>Docker installed (Optional for custom images)</li>
    <li>Basic understanding of Kubernetes resources like Pod, Service, Deployment</li>
</ul>
