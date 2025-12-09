FROM php:8.2-fpm

# dependencies
RUN apt-get update && apt-get install -y \
    unzip \
    libzip-dev \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    git \
    curl

RUN docker-php-ext-install pdo pdo_mysql zip

RUN pecl install redis \
    && docker-php-ext-enable redis

# Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Main station for laravel
WORKDIR /var/www/html