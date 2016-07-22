function attr(name: string): void;
function attr(name: string, value: string): void;
function attr(map: number[]): string;

function attr(nameOrMap: string | number[], value?: string): void | string {
    if (nameOrMap && typeof nameOrMap === "string") {
        // handle string case
    } else {
        // handle map case
    }
}