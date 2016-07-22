'use strict';

interface INetworkInterface {
    id: number;
    label?: string;
    configuration: IConfiguration;
}


interface IConfiguration {
    dhcp?: boolean;
    ipAddress?: string;
    subNetMask?: string;
}

class NetworkInterface implements INetworkInterface {
    constructor(public id: number,
                public label?: string,
                public configuration?: IConfiguration) {
                    // Nothing to do here
    }
    
    /**
     * Returns the label of a network interface.
     */
    public toString(): string {
        return this.label ? this.label : 'Unknown';
    }
}

function printLabel(nic: NetworkInterface | INetworkInterface): void {
    if (nic instanceof NetworkInterface) {
        console.log('The label of the network interface is' + (nic as NetworkInterface).toString());
    } else {
        console.log(typeof(nic));
    }
}

class DestructuringObjects {
    public static main(): number {
        // structuring
        const myNIC: NetworkInterface = new NetworkInterface(0, 'eth0', { dhcp: true });
        console.log(myNIC.toString());

        const myNIC2: INetworkInterface = {id: 0, label: 'eth0', configuration: { dhcp: true }};
        console.log(myNIC2.label);
        console.log(myNIC2.toString());

        // destructuring to variables with the same name than the original properties
        let { id, label, configuration } = myNIC;
        console.log(id, label, configuration.dhcp, configuration.ipAddress, configuration.subNetMask);

        // destructure to variables with different name than original properties
        let { id: a, label: b, configuration : c } = myNIC;
        console.log(a, b, c.dhcp, c.ipAddress, c.subNetMask);

        // destructuring a single propertie to a variables
        let { label: d } = myNIC;
        console.log(d);

        // destructuring a single propertie to a variables... even depper!
        let { configuration: { dhcp }} = myNIC;
        console.log(dhcp);

        // in other order... what is the meaning of const???
                                    // please note that the comments below are indented just for educational reasons
                                    // these ones are indented just because
        // myNIC = myNIC2;          // nope! myNIC is not re-assignable! It is a const!
        myNIC.label = 'eht1';       // alright! You cannot re-assign myNIC...
        console.log(myNIC.label);   // but it is not immutable!
        
        printLabel(myNIC);
        printLabel(myNIC2);

        return 0;
    }
}

DestructuringObjects.main();