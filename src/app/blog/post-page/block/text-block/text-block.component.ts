import { Component, Input, OnInit } from '@angular/core';
import { Block, BlockType, RichText } from '@app/model/blog';
import { BlockComponent } from '../block.component';

@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.scss']
})
export class TextBlockComponent implements BlockComponent, OnInit {
  @Input() block!: Block;
  type!: BlockType;
  text!: RichText[];
  link!: string;

  /** Pre-process the block to fill required fields */
  ngOnInit() {
    // TODO: deal with children
    const { type, richText } = this.block;

    this.type = type;
    this.text = richText;
  }

  public get types(): typeof BlockType {
    return BlockType;
  }
}