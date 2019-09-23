# Alfa

This is the main project of the Alfa-DVMS. Alfa-DVMS is a manager tool for creating a infrastructere to virtualize câmeras and microphones. The ideas behind this tool is: a single camera can be source of a variaty of plugins that process, manipulate and extract data from the multimedia stream and delivery it for an application that started this plugins remotly via FIWARE.

The final result of this project can be seen at the above images.

<img src="docs/img/vms.png" width="50%">

# Requirements

## Docker

You need a hostwith docker installed AND the API MUST BE enabled! 

To enable the API do it

1 - Navigate to /lib/systemd/system in your terminal and open docker.service file vi /lib/systemd/system/docker.service
2 - Find the line which starts with ExecStart and adds -H=tcp://0.0.0.0:2375 to make it look like
3 - ExecStart=/usr/bin/dockerd -H=fd:// -H=tcp://0.0.0.0:2375
4 - Save the Modified File
5 - Reload the docker daemon: systemctl daemon-reload
6 - Restart the container: sudo service docker restart
7 - Test if it is working by using this command, if everything is fine below command should return a JSON

curl http://localhost:2375/images/json

Important!
Be default the docker API to port: 2375 if you need another port then change the configuration at api/config/dev.env

# To run the API

You need the docker and docker-compose instaled in your machine.

access the folder api and run 

```
docker-compose up
```

# WEB AP

To run the web interface access the folder web-app then run `npm run serve`

# Types of Suported SRC

* Video Sample Test
* USB devices
* RTSP devices

# Types of Suported VMS

* UDP to UDP
* Crop video and send to UDP
* Greyscale and send to UDP

# View Videos in VLC

1 - Create a play.sdp file with the content

```
v=0
c=IN IP4 127.0.0.1
m=video 50000 RTP/AVP 96
a=rtpmap:96 H264/90000
a=fmtp:96 media=video; clock-rate=90000; encoding-name=H264; sprop-parameter-sets=Z2QAFKzZQUH7AWoMAgtKAAADAAIAAAMAeR4oUyw\=\,aOvssiw\=
```

2 - vlc play.sdp

# Important things to do

1 - Create a "import" to basic configurations
2 - Login and password feature
3 - Create a way do remove gst_bin_remove_many elementos from SRC queue (when stop the VMS)
4 - Create a VMS that use data from two different SRCs

# Roadmap

* API
* Web Interface
* Plugins: here are some basic plugins that can be used as as template to your own plugins
* FIWARE Integration

# Video Tutoriais (in portuguese)

## Introdução ao gsteramer
https://www.youtube.com/watch?v=KLhZmEGeqHk&t=331s

## Criando um programa em C usando gstreamer e rodando em um docker container
https://www.youtube.com/watch?v=GlnXkJnsMGk&feature=youtu.be

# Special Thanks To 
* VUEJS https://vuejs.org/
* Bootstrap VUE https://bootstrap-vue.js.org/
* Lib icons: https://feathericons.com/

# links importantes

* https://embeddedartistry.com/blog/2018/2/22/generating-gstreamer-pipeline-graphs how to plot dot files from gstreamer pipelines

* http://tordwessman.blogspot.com/2013/06/gstreamer-tee-code-example.html
Example dynamic pad