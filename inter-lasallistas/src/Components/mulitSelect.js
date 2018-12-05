import React, { Component } from 'react';
import MultiSelectReact from 'multi-select-react';

class MultiSelect extends Component {
    constructor() {
        super();
        this.state = {
            multiSelect: []
        };
    }

    render() {

        const selectedOptionsStyles = {
            color: "#3c763d",
            backgroundColor: "#dff0d8"
        };
        const optionsListStyles = {
            backgroundColor: "#fcf8e3",
            color: "#8a6d3b"
        };
        
        return (
            <MultiSelectReact
                options={this.props.options}
                optionClicked={this.optionClicked.bind(this)}
                selectedBadgeClicked={this.selectedBadgeClicked.bind(this)}
                selectedOptionsStyles={selectedOptionsStyles}
                optionsListStyles={optionsListStyles}
            />
        );
    }

    optionClicked(optionsList) {
        this.setState({ multiSelect: optionsList });
    }

    selectedBadgeClicked(optionsList) {
        this.setState({ multiSelect: optionsList });
    }

}

export default MultiSelect;