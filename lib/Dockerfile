FROM quay.io/maherzubair/sigma-md:beta
RUN git clone https://github.com/Rhodvick/vick-md /root/vick-md
WORKDIR /root/vick-md/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
 
