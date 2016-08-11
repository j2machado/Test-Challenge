window.onload = function onLoad() {
        
        
				var barUX = new ProgressBar.Circle(uxProgress, {
  					color: '#f2f2f2',
  					// This has to be the same size as the maximum width to
					// prevent clipping
  					strokeWidth: 8,
  					trailWidth: 7,
  					easing: 'easeInOut',
  					duration: 1400,
  					text: {
    					autoStyleContainer: false,
  					},
  					from: { color: '#fa5843', width: 4 },
  					to: { color: '#fa5843', width: 8 },
  					// Set default step function for all animate calls
  					step: function(state, circle) {
    					circle.path.setAttribute('stroke', state.color);
    					circle.path.setAttribute('stroke-width', state.width);

    				var value = Math.round(circle.value() * 100);
    				if (value === 0) {
      					circle.setText('');
    				} else {
      					circle.setText(value + '%');
    				}

  				}
				});
				barUX.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
				barUX.text.style.fontSize = '3rem';
				barUX.animate(0.75);  // Number from 0.0 to 1.0

				var barMOBILE = new ProgressBar.Circle(mobileProgress, {
  					color: '#f2f2f2',
  					// This has to be the same size as the maximum width to
					// prevent clipping
  					strokeWidth: 8,
  					trailWidth: 7,
  					easing: 'easeInOut',
  					duration: 1400,
  					text: {
    					autoStyleContainer: false,
  					},
  					from: { color: '#fa5843', width: 4 },
  					to: { color: '#fa5843', width: 8 },
  					// Set default step function for all animate calls
  					step: function(state, circle) {
    					circle.path.setAttribute('stroke', state.color);
    					circle.path.setAttribute('stroke-width', state.width);

    				var value = Math.round(circle.value() * 100);
    				if (value === 0) {
      					circle.setText('');
    				} else {
      					circle.setText(value + '%');
    				}

  				}
				});
				barMOBILE.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
				barMOBILE.text.style.fontSize = '3rem';
				barMOBILE.animate(0.90);  // Number from 0.0 to 1.0

				var barFRONT = new ProgressBar.Circle(frontProgress, {
  					color: '#f2f2f2',
  					// This has to be the same size as the maximum width to
					// prevent clipping
  					strokeWidth: 8,
  					trailWidth: 7,
  					easing: 'easeInOut',
  					duration: 1400,
  					text: {
    					autoStyleContainer: false,
  					},
  					from: { color: '#fa5843', width: 4 },
  					to: { color: '#fa5843', width: 8 },
  					// Set default step function for all animate calls
  					step: function(state, circle) {
    					circle.path.setAttribute('stroke', state.color);
    					circle.path.setAttribute('stroke-width', state.width);

    				var value = Math.round(circle.value() * 100);
    				if (value === 0) {
      					circle.setText('');
    				} else {
      					circle.setText(value + '%');
    				}

  				}
				});
				barFRONT.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
				barFRONT.text.style.fontSize = '3rem';
				barFRONT.animate(0.45);  // Number from 0.0 to 1.0

				var barBACK = new ProgressBar.Circle(backProgress, {
  					color: '#f2f2f2',
  					// This has to be the same size as the maximum width to
					// prevent clipping
  					strokeWidth: 8,
  					trailWidth: 7,
  					easing: 'easeInOut',
  					duration: 1400,
  					text: {
    					autoStyleContainer: false,
  					},
  					from: { color: '#fa5843', width: 4 },
  					to: { color: '#fa5843', width: 8 },
  					// Set default step function for all animate calls
  					step: function(state, circle) {
    					circle.path.setAttribute('stroke', state.color);
    					circle.path.setAttribute('stroke-width', state.width);

    				var value = Math.round(circle.value() * 100);
    				if (value === 0) {
      					circle.setText('');
    				} else {
      					circle.setText(value + '%');
    				}

  				}
				});
				barBACK.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
				barBACK.text.style.fontSize = '3rem';
				barBACK.animate(0.60);  // Number from 0.0 to 1.0

        var a = new Date();
        var b = a.getFullYear();
        document.getElementById("copyyear").innerHTML = b;

			};

