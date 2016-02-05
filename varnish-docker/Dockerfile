FROM        ubuntu:14.04.2
MAINTAINER  Shyam Chandran "shyamchandranmec@gmail.com"
ENV REFRESHED_AT 05-02-2016

# Update the package repository and install applications
RUN apt-get install -y curl libc6 libcurl3 zlib1g

RUN apt-get install -y apt-transport-https 
RUN	curl https://repo.varnish-cache.org/GPG-key.txt | apt-key add - 
RUN	echo "deb https://repo.varnish-cache.org/ubuntu/ trusty varnish-4.1" >> /etc/apt/sources.list.d/varnish-cache.list 
RUN	apt-get update 
RUN	apt-get install -y varnish

# Make our custom VCLs available on the container
RUN rm -f /etc/varnish/default.vcl
ADD default.vcl /etc/varnish/default.vcl

# Expose port 80
EXPOSE 80

# Expose volumes to be able to use data containers
#VOLUME ["/var/lib/varnish", "/etc/varnish"]

RUN echo "Config changed at 05-02-2016"
ADD start.sh /start.sh

CMD ["/start.sh"]
