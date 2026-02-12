FROM ubuntu:20.04

ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Avoid warnings by switching to noninteractive
ENV DEBIAN_FRONTEND=noninteractive

# Create the user
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
    && apt-get update \
    && apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Copy and run the setup script
COPY setup.sh /tmp/setup.sh
RUN chmod +x /tmp/setup.sh \
    && export USERNAME=$USERNAME \
    && export USER_UID=$USER_UID \
    && export USER_GID=$USER_GID \
    && /tmp/setup.sh \
    && rm /tmp/setup.sh