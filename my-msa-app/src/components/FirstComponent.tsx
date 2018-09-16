import * as React from "react";

export default class FirstComponent extends React.Component<{}> {

        public render() {
                return (
                        <div className="centreText">
                                {/* React components must have a wrapper node/element */}
                                <h1>Please use currency codes e.g. USD, NZD, AUD...</h1>
                        </div>
                );
        }
}