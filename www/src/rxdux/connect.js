import {default as React, Component, PropTypes} from 'react';

const connect = (selector = state => state) => WrappedComponent => {
    return class Connect extends Component {
        static contextTypes = {
            state$: PropTypes.object.isRequired
        };

        static displayName = 'Connect';

        componentWillMount() {
            this.subscription = this
                .context
                .state$
                .map(selector)
                .subscribe(this.setState.bind(this));
        }

        componentWillUnmount() {
            this
                .subscription
                .unsubscribe();
        }

        render() {
            return (<WrappedComponent {...this.state} {...this.props}/>);
        }
    };
};

export default connect;