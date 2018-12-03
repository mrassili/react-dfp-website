import Link from 'next/link';

const { ADSLOT_API, DFP_SLOTS_PROVIDER, DFP_MANAGER } = require('../api.json');

const MAIN_ENDPOINT = '/example';

function getListItems(listEntries, section) {
    return Object
        .keys(listEntries)
        .map(key => (
            <li key={`${section}-${key}`} className={`sidebar-item ${key}`}>
                <Link
                    as={`${section.toLowerCase()}/${key.toLowerCase()}`}
                    href={`${MAIN_ENDPOINT}?title=${encodeURIComponent(key)}&example=${encodeURIComponent(key)}`}
                >
                    <a 
                        data-href={`${MAIN_ENDPOINT}?title=${encodeURIComponent(key)}&example=${encodeURIComponent(key)}`}
                    >{key}</a>
                </Link>
            </li>
        ));
}

export default function sideBar(props) {
    return (
        <div id="sidebar">
            <h3> Basic Examples </h3>
            <ol>
                <li>
                    <Link
                        as="/examples/basic"
                        href={`${MAIN_ENDPOINT}?title=${encodeURIComponent('Basic Example')}&example=basic`}
                    >
                        <a>Basic Example</a>
                    </Link>
                </li>
                <li>
                    <Link
                        as="/examples/refreshable"
                        href={`${MAIN_ENDPOINT}?title=${encodeURIComponent('Refreshable ads')}&example=refreshable`}
                    >
                        <a>Refreshing Ads</a>
                    </Link>
                </li>
            </ol>
            <h3> AdSlot </h3>
            <ol>{ getListItems(ADSLOT_API, 'AdSlot') } </ol>
            <h3> DFPSlotsProvider </h3>
            <ol>{ getListItems(DFP_SLOTS_PROVIDER, 'DFPSlotsProvider') } </ol>
            <h3> DFPManager </h3>
            <ol>{ getListItems(DFP_MANAGER, 'DFPManager') } </ol>
        </div>
    );
}
