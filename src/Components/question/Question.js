import React from 'react';

const Question = () => {
    return (
        <div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does react work??
                </div>
                <div className="collapse-content text-3xl w-50 h-30">
                    <p>tabIndex={0} React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    what is the difference between props and state??
                </div>
                <div className="collapse-content text-3xl">
                    <p>tabIndex={0}
                        Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    The works of useEffect??
                </div>
                <div className="collapse-content text-3xl">
                    <p> It keeps counting even though it should only count once!

                        useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.

                        This is not what we want. There are several ways to control when side effects run.

                        We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.</p>
                </div>
            </div>
        </div>
    );
};

export default Question;