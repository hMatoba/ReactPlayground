import * as React from 'react';

interface CounterProps {
    defaultCount: number;
}

interface CounterState {
    count: number;
}

export default class Counter extends React.Component<CounterProps, CounterState> {
    constructor(props: CounterProps){
        super(props);
        this.state = { count: this.props.defaultCount };
    }

    public increment(event: any) : void {
        this.setState({ count: this.state.count + 1 });
    }

    public render() {
        return (
            <div>
                Count: { this.state.count }
                <button onClick = { e => this.increment(e) }>Increment!</button>
            </div>
        );
    }
}