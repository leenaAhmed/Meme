import React from 'react' 

class memeGenerator extends React.Component {

          state = { 
              topText:"" ,
              bottomText: '' ,
              randomImg: 'https://i.imgflip.com/345v97.jpg',
              allMemes: []
          } 
       // We'll be using an API that provides a bunch of meme images 
      componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
          .then(response => response.json())
            .then(response => {
                const {memes} = response.data 
                console.log(memes[1])
                this.setState({ allMemes: memes })
            })
      }
      // hendel controll form 
      handelChange = (event)=>{
          const {name , value} = event.target 
          this.setState({[name] : value})  
 
      }

       // get a random int (index in the array) 
       // get the meme from that index
       // set `randomImg` to the `.url` of the random item I grabbed 
       handelSubmit =  (event) => {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemes.length)
        const randMemeImg = this.state.allMemes[randNum].url
        this.setState({ randomImg: randMemeImg })
       }
     render() {
         return (
             <div> 
                 <form onSubmit ={this.handelSubmit} className="memeForm">
                     <input 
                          placeholder="top Text" 
                          name="topText" 
                          value ={this.state.topText} 
                          onChange= {this.handelChange}
                     />
                       <input 
                          placeholder="bottom Text" 
                          name="bottomText" 
                          value ={this.state.bottomText} 
                          onChange= {this.handelChange}
                     />
                      
                      <button> Generat</button>
                 </form>
                  <section>
                      <img 
                         src={this.state.randomImg} 
                         alt="meme"
                      /> 
                      <h2 className="top">{this.state.topText}</h2> 
                      <h2 className='bottom'>{this.state.bottomText}</h2>
                  </section>
              </div>
         )
     }

}


export default memeGenerator
