import React, { Component } from "react"

import starSVG from "./star.svg"



class Card extends Component {
	constructor() {
		super()
    }
    


	render() {
        const { data } = this.props
        const langMap = {
            en: "English",
        }
    console.log(data)
		if (!data) {
			return
		}

		return (
			<div className="card">
				<div className="img-container">
					<img className="poster-img" src={`http://image.tmdb.org/t/p/w185/${data.poster_path}`} />
				</div>
				<div className="card-detail">
					<div className="card-title">{data.title}</div>
					<div className="card-lang">{langMap[data.original_language]}</div>
					<div className="card-vote">votes : {data.vote_count}</div>
					<div className="card-vote">
						<img src={starSVG} />
						{data.vote_average}
					</div>
					<div className="card-desc">{data.overview}</div>
					<div className="card-release">{data.release_data}</div>
				</div>
			</div>
		)
	}
}

export default Card