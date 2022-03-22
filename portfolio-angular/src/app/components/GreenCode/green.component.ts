import { Component } from "@angular/core";
// const lineColor = "#46d22d";
// const lineWidth = 0.5;
// const opacity = 0.7;
const showCutoff = 0.6;

const defaultCoordinates = [
    [-2,0,0,0],
    [0,0,2,0],
    [-2,0,-2,2],
    [-2,2,-2,4],
    [2,0,2,2],
    [2,2,2,4],
    [-2,0,0,2],
    [2,0,0,2],
    [-2,4,0,2],
    [2,4,0,2],
    [-2,4,0,4],
    [0,4,2,4],
    [-2,4,-2,6],
    [-2,6,-2,8],
    [2,4,2,6],
    [2,6,2,8],
    [-2,4,0,6],
    [2,4,0,6],
    [-2,8,0,6],
    [2,8,0,6],
    [-2,8,0,8],
    [0,8,2,8]
];

const green_code = (x1: number, y1: number, x2: number, y2: number, opacity: number = 0.7) => {
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#46d22d" stroke-width="0.5" opacity="${opacity}" />`;
}

@Component({
    selector: "gc0",
    template: `<line attr.x1="{{ defaultCoordinates[0][0] }}" attr.y1="{{ defaultCoordinates[0][1] }}" attr.x2="{{ defaultCoordinates[0][2] }}" attr.y2="{{ defaultCoordinates[0][3] }}" attr.stroke="#46d22d" attr.stroke-width="0.5" attr.opacity="{{ showVals[0] }}"></line>
    <line attr.x1="{{ defaultCoordinates[1][0] }}" attr.y1="{{ defaultCoordinates[1][1] }}" attr.x2="{{ defaultCoordinates[1][2] }}" attr.y2="{{ defaultCoordinates[1][3] }}" attr.stroke="#46d22d" attr.stroke-width="0.5" attr.opacity="{{ showVals[0] }}"></line>
    <line attr.x1="{{ defaultCoordinates[2][0] }}" attr.y1="{{ defaultCoordinates[2][1] }}" attr.x2="{{ defaultCoordinates[2][2] }}" attr.y2="{{ defaultCoordinates[2][3] }}" attr.stroke="#46d22d" attr.stroke-width="0.5" attr.opacity="{{ showVals[0] }}"></line>
    <line attr.x1="{{ defaultCoordinates[3][0] }}" attr.y1="{{ defaultCoordinates[3][1] }}" attr.x2="{{ defaultCoordinates[3][2] }}" attr.y2="{{ defaultCoordinates[3][3] }}" attr.stroke="#46d22d" attr.stroke-width="0.5" attr.opacity="{{ showVals[0] }}"></line>
    `
})
export class GC0 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc1",
    template: `{{ showLines.join('') }}`
})
export class GC1 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc2",
    template: `{{ showLines.join('') }}`
})
export class GC2 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc3",
    template: `{{ showLines.join('') }}`
})
export class GC3 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc4",
    template: `{{ showLines.join('') }}`
})
export class GC4 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc5",
    template: `{{ showLines.join('') }}`
})
export class GC5 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc6",
    template: `{{ showLines.join('') }}`
})
export class GC6 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc7",
    template: `{{ showLines.join('') }}`
})
export class GC7 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc8",
    template: `{{ showLines.join('') }}`
})
export class GC8 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc9",
    template: `{{ showLines.join('') }}`
})
export class GC9 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc10",
    template: `{{ showLines.join('') }}`
})
export class GC10 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc11",
    template: `{{ showLines.join('') }}`
})
export class GC11 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc12",
    template: `{{ showLines.join('') }}`
})
export class GC12 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc13",
    template: `{{ showLines.join('') }}`
})
export class GC13 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc14",
    template: `{{ showLines.join('') }}`
})
export class GC14 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc15",
    template: `{{ showLines.join('') }}`
})
export class GC15 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc16",
    template: `{{ showLines.join('') }}`
})
export class GC16 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc17",
    template: `{{ showLines.join('') }}`
})
export class GC17 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc18",
    template: `{{ showLines.join('') }}`
})
export class GC18 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc19",
    template: `{{ showLines.join('') }}`
})
export class GC19 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc20",
    template: `{{ showLines.join('') }}`
})
export class GC20 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc21",
    template: `{{ showLines.join('') }}`
})
export class GC21 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc22",
    template: `{{ showLines.join('') }}`
})
export class GC22 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc23",
    template: `{{ showLines.join('') }}`
})
export class GC23 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc24",
    template: `{{ showLines.join('') }}`
})
export class GC24 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc25",
    template: `{{ showLines.join('') }}`
})
export class GC25 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc26",
    template: `{{ showLines.join('') }}`
})
export class GC26 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc27",
    template: `{{ showLines.join('') }}`
})
export class GC27 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc28",
    template: `{{ showLines.join('') }}`
})
export class GC28 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc29",
    template: `{{ showLines.join('') }}`
})
export class GC29 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc30",
    template: `{{ showLines.join('') }}`
})
export class GC30 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc31",
    template: `{{ showLines.join('') }}`
})
export class GC31 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc32",
    template: `{{ showLines.join('') }}`
})
export class GC32 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc33",
    template: `{{ showLines.join('') }}`
})
export class GC33 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc34",
    template: `{{ showLines.join('') }}`
})
export class GC34 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}

@Component({
    selector: "gc35",
    template: `{{ showLines.join('') }}`
})
export class GC35 {
    showVals: number[]
    showLines: string[]

    constructor() {
        this.showVals = this.getToShow();
        this.showLines = [];
        for(let i = 0; i < 22; i++) {
            let tempVals = defaultCoordinates[i];
            this.showLines.push(green_code(tempVals[0], tempVals[1], tempVals[2], tempVals[3],this.showVals[i]))
        }
    }

    getToShow() {
        let output = [];
        for(let i = 0; i < 22; i++) {
            if(Math.random() < showCutoff) {
                output.push(0.7);
            } else {
                output.push(0);
            }
        }
        return output;
    }
}