import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
	const [currentTime, setCurrentTime] = useState<number | undefined>(0);
	const video = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		video.current?.addEventListener("timeupdate", () => {
			setCurrentTime(video.current?.currentTime);
		});
	}, []);

	return (
		<>
			<h1>{currentTime}</h1>
			<div>
				<video ref={video} controls width="750" height="500">
					<source
						src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
						type="video/mp4"
					/>
				</video>
			</div>
		</>
	);
}

export default App;
