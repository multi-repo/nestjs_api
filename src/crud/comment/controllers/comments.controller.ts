import { Controller, Body, Put, Get, Post, Delete, Param, Header, UseGuards, BadRequestException, NotFoundException } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { UsePipes } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CommnetDto } from '../dto/comment.dto';
import { CommentsService } from '../services/comments.service';

@Controller('user/:id/columns/:column_name/cards/:card_name/comments/')
export class CommentsController {
  constructor(
    private readonly commentService: CommentsService,
  ) { }

  @ApiTags('create_comment')
  @Post('add')
  @UsePipes(new ValidationPipe())
  async addComment(
    @Param('id') id: CommnetDto["id"],
    @Param('column_name') column_name: CommnetDto["column_name"],
    @Param('card_name') card_name: CommnetDto["card_name"],
    @Body('comment_name') comment_name: CommnetDto["comment_name"]) {

    return await this.commentService.createComment(id, column_name, card_name, comment_name);
  }

  @ApiTags('Get comment')
  @Get(':comment_name')
  @UsePipes(new ValidationPipe())
  async getComment(@Param() comDto: CommnetDto) {

    return await this.commentService.getComment(comDto);

  }

  @ApiTags('Delete comment')
  @Delete(':comment_name')
  @UsePipes(new ValidationPipe())
  async deleteComment(@Param() comDto: CommnetDto) {

    return await this.commentService.deleteCommentq(comDto);
  }

  @ApiTags('Update comment')
  @Put(':comment_name')
  @UsePipes(new ValidationPipe())
  async updateComments(@Param() comDto: CommnetDto, @Body('new_name') new_name: string) {
    return await this.commentService.updateComment(comDto, new_name);
  }
}
