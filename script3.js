            class palymusic{
                constructor(){
                    this.file_music = document.getElementById("mucis");
                    this.paly_music = document.getElementById("playx");
                    this.isplayer;

                    this.paly_music.addEventListener("click",()=>{
                        this.play_pause()
                    });
                    this.play_pause();

                    this.audio_mucis = [];
                    this.audio_mucis[0] = "music6.m4a"
                    this.audio_mucis[1] = "music1.m4a"
                    this.audio_mucis[2] = "music2.m4a"
                    this.audio_mucis[3] = "music3.m4a"
                    this.audio_mucis[4] = "music4.m4a"
                    this.audio_mucis[5] = "music5.m4a"
                    this.audio_mucis[6] = "music.m4a"
                    this.server = 0 ;

                    this.next_music = document.getElementById("next");
                    this.next_music.addEventListener("click",()=>{
                        if(this.server<this.audio_mucis.length-1){
                            ++this.server;
                            this.isplayer= false; 
                        }else{
                            this.server=0;
                            this.isplayer= false;
                        }
                        // localStorage.setItem("SAVE",this.server);
                        this.mucisSource();
                    });

                    this.back_music = document.getElementById("back");
                    this.back_music.addEventListener("click",()=>{
                        if(this.server>0){
                            --this.server;
                            this.isplayer= false; 
                        }else{
                            this.server=this.audio_mucis.length-1 ;
                            this.isplayer= false;
                        }
                        // localStorage.setItem("SAVE",this.server);
                        this.mucisSource();
                    });
                }

                mucisSource(){
                    // if(localStorage.getItem("SAVE")!=null){
                    //     this.server = localStorage.getItem("SAVE");
                    // }
                    this.file_music.src = this.audio_mucis[this.server];
                    this.play_pause();
                }

                play_pause(){
                    if(this.isplayer == false){
                        this.paly_music.classList.remove("fa-solid","fa-play");
                        this.paly_music.classList.add("fa-solid" , "fa-pause");
                        this.file_music.play();
                        this.isplayer=true;
                    }else{
                        this.paly_music.classList.remove("fa-solid" , "fa-pause");
                        this.paly_music.classList.add("fa-solid","fa-play");
                        this.file_music.pause();
                        this.isplayer= false; 
                    }
                }
            }
            onload = new palymusic();

            class player{
                constructor(){
                    var heightMain = document.getElementById("background")
                    if(screen.width<500){
                        heightMain.style.width = screen.width + "px";
                    }
                }
            }
            onload = new player();
            

            // var music = document.getElementById("music");

            // function PlayMusic(){
            //     music.play();
            // }
            // function StopMusic(){
            //     music.pause();
            // }
            // function loadMusic(){
            //     music.load();
            // }
            // function volumePlay(){
            //     music.playbackRate += 0.10;
            // }
            // function volumeStop(){
            //     music.playbackRate -= 0.10;
            // }





        // var userName = window.prompt("ادخل اسم المستخدم : ");
        // var password = window.prompt("ادخل كلمة السر: ");
        // if(userName === "Hamza" && password === "1234"){
        //     alert("yes");
        // }else{
        //     alert("no");
        // }

        // let logo = document.getElementById("logo");

        // logo.setAttribute("src","images.jpg")
        // logo.setAttribute("width" , "100%")

        // if(logo.getAttribute("src")!=null){
        //     logo.setAttribute("height" , "700px")
        // }
        // var counter = 0 ;
        // var text = setInterval(() => {
        //     counter++ ;
        //     console.log(counter);
        //     if(counter == 10 ){
        //         clearInterval(text);
        //         alert("اكتمل");
        //     }
        // }, 2000);
        
        // class slider{
        //     constructor(){
        //         this.image = [];
        //         this.image[0] = "img.jpg";
        //         this.image[1] = "img2.jpg";
        //         this.image[2] = "images.jpg";
        //         this.image[3] = "image4.jpg";

        //         // this.text = [];
        //         // this.text[0]= "Hamza";
        //         // this.text[1]= "Hamza1";
        //         // this.text[2]= "Hamza2";
        //         // this.text[3]= "Hamza3";
        //         this.counter = 0 ;

        //         this.palyslider();

        //         setInterval(()=>{
        //             this.palyslider();
        //         },3*1000)
        //     }
        //     palyslider(){
        //         if(this.counter < this.image.length - 1){
        //             this.counter++;
        //         }else{
        //             this.counter= 0;
        //         }
        //         document.slide_show.src = this.image[this.counter]
        //         // document.getElementById("sliderTitle").innerHTML = this.text[this.counter]
        //     }
        // }
        // onload = new slider();




        
        // function add(){

        //     var li = document.createElement("li");

        //     var input = document.getElementById("input").value;

        //     var text = document.createTextNode(input) ;

        //     li.appendChild(text);

        //     document.getElementById("myList").appendChild(li);

        // }
        var liveMap ;
        if(navigator.geolocation){
            liveMap = navigator.geolocation.getCurrentPosition(function(position){
                document.getElementById("mainMap").innerHTML =`
                <iframe height="600" width="800" src="https://www.openstreetmap.org/export/embed.html?bbox=${position.coords.longitude},${position.coords.latitude},&;layer=mapnik"> </iframe>`
                
                console.log(position)
            },function(error){
                console.log(error)
            })
        }


       