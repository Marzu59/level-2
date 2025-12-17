

//interface
//abstract class

//idea

// interface Mediaplayer {
//     play(): void;
//     pause(): void;
//     stop(): void;
// }

// class DMusicPlay implements Mediaplayer{
//     play() {
//         console.log('music playing')
//     } 
//     pause(){
//         console.log('music paused')
//     }
//     stop() {
//         console.log('music stoppd')
//     }
// }

// const mezBahPlayer = new DMusicPlay()
// mezBahPlayer.play()




//abstract 


abstract class Mediaplayer{
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;

}

class Mezbah extends Mediaplayer{
    play(){
        console.log('kheltece')
    }
    pause(): void {
        console.log('pause kra')
    }
    stop(): void {
        console.log('sesh')
    }
}

const mezbaPalyer = new Mezbah()
mezbaPalyer.stop()