$(document).on('turbolinks:load', function() {
  $('body').on('click', '.single-post-card', '.single-post-list', function() {
    var postedBy = $(this).find('.post-content .posted-by').html();
    var postHeading = $(this).find('.post-content h3').html();
    var postContent = $(this).find('.post-content p').html();
    var interested = $(this).find('.post-content .interested').attr('href');
    $('.modal-header .posted-by').text(postedBy);
    $('.loaded-data h3').text(postHeading);
    $('.loaded-data p').text(postContent);
    $('.loaded-data .interested a').attr('href', interested);
    $('.myModal').modal('show');
  });
});
