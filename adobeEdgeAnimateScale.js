function adjustStageSize() {
	var $window = $(window);
	var $stage = $('#Stage');
	var $stageWidth = $stage.width();
	var $stageHeight = $stage.height();
	
	if ($window.width() > $stageWidth) {
		var xRatio = $window.width() / $stageWidth;
		var yRatio = $window.height() / $stageHeight;
		
		var ratio = xRatio > yRatio ? yRatio : xRatio;

		var newWidth = $stageWidth * ratio;
		var newHeight = $stageHeight * ratio;

		$stage.css({
			'width': newWidth,
			'height': newHeight,
			'font-size': ratio * 100 + '%',
		});
	}
}
