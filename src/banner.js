import React, { Component } from 'react';
import './banner.css'

class Banner extends Component {
	constructor(){
		super();
		this.state = {
			index:0,
			w:0,
			myTimer:null,
			setTimer:null,
			transitions:0.7
		}
	}
	componentDidMount(){
		this.autoplay();
	}
	autoplay(){
		clearInterval(this.state.myTimer);
		clearInterval(this.state.setTimer);
		this.state.myTimer = setTimeout(()=>{
			this.setState({
				transitions:this.props.bannerJson.timer/1000,
				w:100
			})
		},0);
		
		this.state.setTimer = setInterval(()=>{
			this.setState({
				index:this.state.index +1>this.props.bannerJson.picUrl.length-1?0:this.state.index +1,
				transitions:0,
				w:0
			})
			setTimeout(()=>{
				this.setState({
					transitions:this.props.bannerJson.timer/1000,
					w:100
				})
			},10)
		},this.props.bannerJson.timer)
	}
	click(i){
		this.setState({
			index:i
		})
	}
	leftClick(){
		this.setState({
			index:this.state.index -1==-1?this.props.bannerJson.picUrl.length-1:this.state.index -1
		})
	}
	rightClick(){
		this.setState({
			index:this.state.index +1>this.props.bannerJson.picUrl.length-1?0:this.state.index +1
		})
	}
	onmouseover(){
		clearInterval(this.state.myTimer);
		clearInterval(this.state.setTimer);
		this.setState({
			transitions:0,
			w:0
		})
	}
	onmouseout(){
		this.autoplay();
	}
  render() {
	let aLi = [],oLi = [];
	console.log(this.props.bannerJson)
	this.props.bannerJson.picUrl.forEach((val,index)=> {
		aLi.push(<li key={index}><img src={val} alt="pic" /></li>);
		oLi.push(<li className={this.state.index==index?'active':''} onClick={this.click.bind(this,index)} key={index}></li>);
	})
    return (
      <div className="bannerBox" onMouseOver={this.onmouseover.bind(this)} onMouseOut={this.onmouseout.bind(this)}>
				<div className="line" style={{transition:this.state.transitions+'s linear',width:this.state.w+'%'}}></div>
				<div className="leftdiv" onClick={this.leftClick.bind(this)}></div>
				<div className="rightdiv" onClick={this.rightClick.bind(this)}></div>

        <ul style={{width:this.props.bannerJson.picUrl.length*960,left:this.state.index*-960}}>
					{aLi}
				</ul>
				<ol>
					{oLi}
				</ol>
      </div>
    );
  }
}

export default Banner;