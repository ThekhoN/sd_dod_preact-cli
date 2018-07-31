import './style';
import { Component } from 'preact';
import ImgUnit from "./bannerComponent/ImgUnit";

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello, World!</h1>
				<ImgUnit offerImageUrl="https://images.unsplash.com/photo-1532976845185-2d8b3fabc79b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=81a3a29ef330765143527434a0312e7f&auto=format&fit=crop&w=700&q=80" offerName="Hello There!"/>
			</div>
		);
	}
}
