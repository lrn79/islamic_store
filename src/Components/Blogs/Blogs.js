import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1 className='text-dark fw-bold m-5'>*WHAT IS CONTEXT API?</h1>
                <h4 className='m-5 '>Context api is a React structure which gives you more facilities!... Its makes easy to explore react!...with fun!..It enable you enables you to exchange unique details and assists in solving prop-drilling from all levels of your application...The Context api is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.we can utilize the Context API without having to use any other modules.Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.Using context, we can avoid passing props through intermediate elementsSo it makes our life easy to used react</h4>
            </div>
            <div>
                <h1 className='text-dark fw-bold m-5'>*WHAT IS SEMANTIC TAG ?</h1>
                <h4 className='m-5'>Semantic is a html elements it refers to the tags that provide meaning to an HTML page rather than just presentation...
                    for example "what effect does running that line of JavaScript have?", or "what purpose or role does that HTML element have" In html semantic tag gives you the text it wraps around the role (or meaning) of "a top level heading on your page." Elements such as header, footer and article are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them As the use of visually designed layouts progressed, programmers started to use a generic “non-semantic” tag like div. They would often give these elements a class or id attribute to describe their purpose. For example, instead of  this was often written as As HTML5 is still relatively new, this use of non-semantic elements is still very common on websites today..Semantic tag is One of the most important features of HTML5 is its semantics. Semantic HTML refers to syntax that makes the HTML more comprehensible by better defining the different sections and layout of web pages. It makes web pages more informative and adaptable, allowing browsers and search engines to better interpret content</h4>
            </div>
        </div>
    );
};

export default Blogs;