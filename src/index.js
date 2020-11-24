//Import react and reactDOM
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

//Create React Component
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    time="Today at 6:00pm" 
                    text="hey" 
                    image={faker.image.cats()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    time="Today at 4:00pm" 
                    text="hello" 
                    image={faker.image.cats()}/>
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    time="Today at 6:30pm" 
                    text="hiii" 
                    image={faker.image.cats()}/>
            </ApprovalCard>
            
        </div>
    );
};

//Display component
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)