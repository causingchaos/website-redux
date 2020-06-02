import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ImageLynda from './img/lynda.png'
import ImageBook from './img/kindle.png';
import ImageACloud from './img/acloud.png';
import FaDesktop from 'react-icons/lib/fa/desktop.js'
import FaBook from 'react-icons/lib/fa/book.js';
import TiTick from 'react-icons/lib/ti/tick.js';
import FaHourglass3 from 'react-icons/lib/fa/hourglass-3.js'



function pickImage (instructor) {
  if (instructor === "lynda") {
    return ImageLynda;
  }if (instructor === "acloudguru"){
    return ImageACloud;
	} else{
    return ImageBook;
  }
}

function pickMediaType (mediaType) {
	if(mediaType == "online"){
		return <FaDesktop color={"White"}/>
	} else {
		return <FaBook/>
	}
}

function pickMediaSubtitle (mediaType) {
	if(mediaType == "online"){
		return "Online Course"
	}if (mediaType == "tutorial"){
		return "Web Tutorial"
	} else{
		return "Book"
	}
}

function checkCompletion (completionDate) {
	if (completionDate == ""){
    return (
			<div>
				<p>In Progress</p>
				<p><FaHourglass3 color={"orange"} size={15}/></p>
			</div>
    )
	}else{
		return (
			<div>
				<p>Date Completed: </p>
				<p><TiTick color={"green"} size={25}/>{completionDate}</p>
			</div>
		)
	}
}

const btnStyle = {
	margin: "0",
	padding: "0",
	textAlign: "center",
	backgroundColor: "#8ecdff"
};

const cardMedia = {
	maxWidth: "100%",
}

const cardTextStyle= {
	height: "200px",
	justifyContent: "space-between",
	flexDirection: "column",
	display: "flex"

}
const cardStyle = {
	border: "2px solid blk",
	backgroundColor: "white"
}
const color = {
	color: "white"
}

const heading={
	height: "55px"
}


const CardExampleWithAvatar = ({courseDetails, label}) => (

	<Card style={cardStyle}>
		<CardMedia
			style={ cardMedia}
			overlay={
				<CardTitle
					title={ pickMediaType(courseDetails[0].mediaType) }
					subtitle={ <p style={color}>{pickMediaSubtitle(courseDetails[0].mediaType)}</p> }
				/>}
		>
			<img src = {pickImage(courseDetails[2].instructor)} alt=""/>
		</CardMedia>
		<CardText style={cardTextStyle}>
			<h5 style={heading}>{label}</h5>
			{ checkCompletion(courseDetails[3].dateCompleted) }
			<div className="btn-holder" id="btn-holder">
				<FlatButton label="link" href={courseDetails[4].link} target={"_blank"} backgroundColor="#8ecdff" style={btnStyle}/>
			</div>
		</CardText>

	</Card>

);

export default CardExampleWithAvatar;

/*

*/