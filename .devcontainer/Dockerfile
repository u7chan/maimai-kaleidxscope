FROM node:22-slim

ENV TZ=Asia/Tokyo

ARG USER_NAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

WORKDIR /app

# add vscode user
RUN groupmod -g 1234 node \
    && usermod -u 1234 -g 1234 node \
    && groupadd --gid $USER_GID $USER_NAME \
    && useradd -s /bin/bash --uid $USER_UID --gid $USER_GID -m $USER_NAME \
    && apt-get update \
    && apt-get install -y sudo \
    && echo $USER_NAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USER_NAME\
    && chmod 0440 /etc/sudoers.d/$USER_NAME \
    && apt-get clean

RUN apt-get update \
    && apt-get install -y \
    bash \
    curl \
    git \
    openssh-client \
    zip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN npm i -g bun \
    && mkdir node_modules \
    && chown $USER_NAME:$USER_NAME node_modules

USER $USER_NAME