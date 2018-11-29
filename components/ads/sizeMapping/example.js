import react, { Component } from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';


export default class Example extends Component {
    render() {
        return (
            <DFPSlotsProvider
                dfpNetworkId='9999'
                adSenseAttributes={{ "foo": "bar", "test": "baz" }}
            >
                <div className="desktop-ads">
                    <AdSlot adUnit='homepage/1' sizes={[ [728,90], [300, 250] ]} />
                </div>
                <div className="mobile-ads">
                    <AdSlot
                        adUnit='homepage/2'
                        sizes={[ [728,90], [300, 250] ]}
                        adSenseAttributes={{ "site_url": "react-dfp.tk" }}
                    />
                </div>
            </DFPSlotsProvider>
        );
    }
}