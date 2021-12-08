import React, { useState } from 'react';
import { AccordionWrapper, Answer, Question } from './Accordion.style';

type Props = {
	data: AccordionData[];
};
type AccordionData = {
	question: string;
	answer: string;
};
export const Accordion: React.FC<Props> = ({ data }) => {
	const [show, setShow] = useState(null);

	const handlerOnClick = (index: any) => {
		if (show === index) {
			console.log(index);
			return setShow(null);
		}

		setShow(index);
	};
	return (
		<div>
			<AccordionWrapper>
				{data.map((item, index) => (
					<>
						<Question onClick={() => handlerOnClick(index)}>
							<h3>{item.question}</h3>
							{/* <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span> */}
						</Question>
						{show === index ? (
							<Answer>
								<p>{item.answer}</p>
							</Answer>
						) : null}
					</>
				))}
			</AccordionWrapper>
		</div>
	);
};
