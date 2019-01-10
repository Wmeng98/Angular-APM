import { Component, OnChanges, Input, EventEmitter, Output} from "@angular/core";


@Component ({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges  {
    @Input() rating: number;
    starWidth: number; // want to be recalculated anytime the container changes the rating number

    // Define event in this component
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void { // only watches for changes in input properties
        this.starWidth= this.rating * 75/5;
    }

    onClick(): void {
        this.ratingClicked.emit(`Rating ${this.rating} was clicked`);
    }

}