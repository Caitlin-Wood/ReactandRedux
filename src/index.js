import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
	  <div className="ui container comments">
	  	<ApprovalCard>
	  		<div>
	  			<h4>Hello!</h4>
					Are you sure you want to comment?
				</div>
	  	</ApprovalCard>

	  	<ApprovalCard>
		  	<CommentDetail
		      author="Sam" 
		      timeAgo="Today at 5:00PM" 
		      message="Nice blog post!" 
		      profPic={faker.image.avatar()} 
		    />
	    </ApprovalCard>

	    <ApprovalCard>
		  	<CommentDetail 
		  	  author="Alex" 
		  	  timeAgo="Today at 2:00PM" 
		  	  message="Wow this is great" 
		  	  profPic={faker.image.avatar()} 
		  	/>
	  	</ApprovalCard>

	  	<ApprovalCard>
		  	<CommentDetail 
		  	  author="Jane" 
		  	  timeAgo="Yesterday at 5:00PM" 
		  	  message="i like what i see" 
		  	  profPic={faker.image.avatar()} 
		  	/>
	  	</ApprovalCard>
	  </div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));


//notes:    using {} to ref js object:
//          ONE exception is Component within a component
//          need to use < /> 