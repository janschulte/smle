import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { VocabularyEntry } from '../../../../services/vocabulary/nerc/model';
import { VocabularyService } from '../../../../services/vocabulary/vocabulary.service';

@Component({
  selector: 'vocab-narrower-entry',
  templateUrl: './vocab-narrower-entry.component.html',
  styleUrls: ['./vocab-narrower-entry.component.scss']
})
export class VocabNarrowerEntryComponent implements OnInit {

  @Input()
  public url: string;

  @Output()
  public selected: EventEmitter<VocabularyEntry> = new EventEmitter();

  @Output()
  public narrowerSelected: EventEmitter<VocabularyEntry> = new EventEmitter();

  public narrower: VocabularyEntry;
  public hideAll: boolean;

  constructor(
    private vocab: VocabularyService
  ) { }

  ngOnInit() {
    if (this.url.startsWith('http://vocab')) {
      this.vocab.getNarrower(this.url).subscribe(res => this.narrower = res);
    } else {
      this.hideAll = true;
    }
  }

  public onSelected(entry: VocabularyEntry) {
    this.selected.emit(entry);
  }

  public onNarrowerSelected(entry: VocabularyEntry) {
    this.narrowerSelected.emit(entry);
  }

}
