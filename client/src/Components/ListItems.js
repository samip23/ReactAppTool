import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';
import { LinearProgress } from '@material-ui/core';



function ListItems(props) {

    const [progressV, setProgressV] = useState(0);
    const [inputProgress, setInputProgress] = useState()


    function handleProgressUpdate(e) {
        setProgressV(e.target.value);
        setInputProgress(e.target.value)
    }

    const items = props.items;
    //console.log(items)
    // <ProgressBar now={20} />
    const listItems = items.map(item => {
        return <div key={item.key}>

            <div>
                <div>
                    <label>Task:</label>
                    {item.text[0].task}
                </div>
                <div>
                    <label>Assigned To:</label>
                    {item.assignee}
                </div>
                <div>
                    <label>Priority:</label>
                    {item.text[0].priority}
                </div>
               
            </div>

            {/* <p>
                <input type="text" id={item.key} value={item.text} onChange={(e) => {
                    props.setUpdate(e.target.text, item.key)
                }} />
            </p>

            <p>
                <input type="text" id={item.key} value={item.assignee} onChange={(e) => {
                    props.setUpdate(e.target.assignee, item.key)
                }} />
            </p>

            <p>
                <input type="text" id={item.key} value={item.priority} onChange={(e) => {
                    props.setUpdate(e.target.priority, item.key)
                }} />

            </p>
 */}
            <p>
                <input type="text" id={item.key} placeholder="Enter Progress (%)" value={inputProgress} onChange={handleProgressUpdate}
                />
            </p>


            <div>
                <LinearProgress variant="determinate" value={progressV} />
            </div>


            <span>

                <FontAwesomeIcon className="faicons" onClick={() => {
                    props.deleteItem(item.key)
                }} icon="trash" />
            </span>

        </div>
    })

    return <div>
        <FlipMove duration={300} easing="ease-in-out">
            {listItems}
        </FlipMove>

    </div>;
};

export default ListItems;