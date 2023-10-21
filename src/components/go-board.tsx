import { useState } from "react";
import '../index.css';
import '../main.css';


export default function GoBoard() {
	
	const [boardSize, setBoardSize] = useState(9);
	const [board , setBoard] = useState<any>([]);
	const [buttons, setButtons] = useState<any>([]);

	for (let i = 0; i < boardSize; i++) {
		board.push([]);
		buttons.push([]);
		for (let j = 0; j < boardSize; j++) {
			board[i].push(
				// <div>
					<p className="py-1 px-2 border border-white">1</p>
				//{/* </div> */}
			);
			buttons[i].push(
				<div>
					<button className="py-1 px-2 border border-white"></button>
				</div>
			)
		}
	}


	return (
		<>
			<div>
				<p>
					A go Board:
				</p>
				<div className="justify-center">
					<div className="flex absolute justify-center inset-x-1">
						{board.map((row: any) => (
							<div>
								{row.map((piece: any) => {
									return piece;
								})}
							</div> 
						))}
					</div>
					<div className="flex absolute justify-center inset-x-1">
						{buttons.map((row: any) => (
							<div>
								{row.map((piece: any) => {
									return piece;
								})}
							</div> 
						))}
					</div>
				</div>
			</div>
		</>
	)
}