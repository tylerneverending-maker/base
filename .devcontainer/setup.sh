## update and install some things we should probably have
apt-get update
apt-get install -y \
  curl \
  git \
  gnupg2 \
  jq \
  sudo \
  zsh

## install build-essential
apt-get install -y build-essential

## add bits needed for GitHub CLI
apt-key adv --keyserver keyserver.ubuntu.com --recv-key C99B11DEB97541F0
apt-add-repository https://cli.github.com/packages
apt-get update
apt-get install -y \
  gh

## install docker
apt-get install -y \
  apt-transport-https \
  ca-certificates \
  lsb-release \
  software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
apt-add-repository -y "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
apt-get update
apt-get install -y docker-ce docker-ce-cli containerd.io

## install docker-compose
COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | jq -r '.tag_name')
curl -fsSL "https://github.com/docker/compose/releases/download/${COMPOSE_VERSION}/docker-compose-linux-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

## install nodejs
curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
apt-get install -y nodejs

## install yarn
curl -fsSL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
apt-get update
apt-get install -y yarn

## install python3 and pip
apt-get install -y \
  python3 \
  python3-pip

## install golang
apt-add-repository -y ppa:longsleep/golang-backports
apt-get update
apt-get install -y golang-go

## install rust
export RUSTUP_HOME=/usr/local/rustup
export CARGO_HOME=/usr/local/cargo
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --no-modify-path
chmod -R a+w $RUSTUP_HOME $CARGO_HOME
ln -s $CARGO_HOME/bin/rustup /usr/local/bin/rustup
ln -s $CARGO_HOME/bin/cargo /usr/local/bin/cargo
ln -s $CARGO_HOME/bin/rustc /usr/local/bin/rustc

## install kubectl
KUBECTL_VERSION=$(curl -L -s https://dl.k8s.io/release/stable.txt)
curl -fsSL "https://dl.k8s.io/release/${KUBECTL_VERSION}/bin/linux/amd64/kubectl" -o /usr/local/bin/kubectl
chmod +x /usr/local/bin/kubectl

## install helm
curl -fsSL https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash

## install terraform
curl -fsSL https://apt.releases.hashicorp.com/gpg | apt-key add -
apt-add-repository -y "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
apt-get update
apt-get install -y terraform

## setup and install oh-my-zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
cp -R /root/.oh-my-zsh /home/$USERNAME
cp /root/.zshrc /home/$USERNAME
sed -i -e "s/\/root\/.oh-my-zsh/\/home\/$USERNAME\/.oh-my-zsh/g" /home/$USERNAME/.zshrc
chown -R $USER_UID:$USER_GID /home/$USERNAME/.oh-my-zsh /home/$USERNAME/.zshrc

## configure git
git config --system user.name "Your Name"
git config --system user.email "you@example.com"

## cleanup
apt-get clean
rm -rf /var/lib/apt/lists/*
