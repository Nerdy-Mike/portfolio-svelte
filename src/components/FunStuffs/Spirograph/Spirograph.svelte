<script>
	// @ts-nocheck
	import jQuery from 'jquery';
	import { onMount } from 'svelte';

	var M = 1,
		handlrot = 0,
		handrrot = 0,
		handerot = 0;
	/*
mech.centerx				__Centerx
mech.centery				__Centery
mech.pic.rot				__Crot
mech.pic.rota				__Crota
mech.hands.basex			__HBx
mech.hands.basey			__HBy
mech.hands.dist				__Hdist
mech.hands.hand[0].rot		__Lrot
mech.hands.hand[0].rota		__Lrota
mech.hands.hand[0].arm1		__Larm1
mech.hands.hand[0].arm2		__Larm2
mech.hands.hand[1].rot		__Rrot
mech.hands.hand[1].rota		__Rrota
mech.hands.hand[1].arm1		__Rarm1
mech.hands.hand[1].arm2		__Rarm2
ext							__Ext
							__Erot		// v2 variables !!!
							__Erota
							__Earm,
*/
	var __Crot = 0,
		__Crota = -1.44,
		__HBx = 30,
		__HBy = -700,
		__Hdist = 1174,
		__Lrot = 0,
		__Lrota = 2.5,
		__Larm1 = 120,
		__Larm2 = 860,
		__Rrot = 0,
		__Rrota = -3.6,
		__Rarm1 = 100,
		__Rarm2 = 1050,
		__Ext = 75,
		__Erot = 0, // v2 variables !!!
		__Erota = 0,
		__Earm = 0,
		/*mech = {

	centerx: minDimension/2*M, centery: minDimension/2*M,
	pic: { rot: 0, rota: -1.44 },

	hands: { 	basex: 30*M, basey: -700*M,		// hands base
				dist: 1174*M,					// distance of the hands
				hand: [
						{ rot: 0, rota: 2.5, arm1: 120*M, arm2: 860*M },
						{ rot: 0, rota: -3.6, arm1: 100*M, arm2: 1050*M }
				]
			}
},*/ AM = Math.PI / 180,
		CW,
		CH,
		handsX,
		handsY,
		H1X,
		H1Y,
		H2X,
		H2Y,
		H1arm1X,
		H1arm1Y,
		H2arm1X,
		H2arm1Y,
		DRX,
		DRY,
		DReX,
		DReY,
		DRaX,
		DRaY,
		FX,
		FY,
		LX,
		LY,
		FirstX,
		FirstY,
		firstPoint = true,
		freeze = false,
		totalLength = 0,
		brightness = 1,
		livespeed = 1,
		nolivespeed = 50,
		speed = nolivespeed,
		colormode = 0,
		livedisplay = false,
		variablewidth = true,
		notsornd = true,
		captioninvalid = true,
		invalidatecaption = false,
		//canupload = false;
		cleandraw = false,
		canupload = false,
		cutpixels = true,
		font = [
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-/=*;:,.<>',
			'0204284442324335464738181215080307minDimension/2525452224683316263634174130100106373120004014232713',
			'4ABCDE/BD 4AFGDHIJKLM/NH/OL 4GFMPQLKJ 4AFGJKO/LM 4EAOR/ST 4AOR/ST 4HUEMPQLR 4ER/US/OA 2VA/ML/CO 4RGFMP 4ENR/AO/NS 4EAO 4ERWOA 4REOA 4UGFMPQLKJU 4SHIJKOA 4DVMPQLKJD 4ENHIJKOA/NS 4JKLQGFMP 4RO/CV 4RGFMPO 6XFO 6XEHVO 4RA/EO 4RTO/TV 4EARO 4YVMPSZaHYE 4OBabUGFVBA 4EMPSZI 4EDVMPSZaDR 4FMPSZbUcB 4MdCKJ/HS 4EMPSZbUefgh 4BabUE/AO 0Ai/QO 3Kj/bklgh 4EWI/AO/WB 1MPO 4Ai/SZTbUE/WT 4Ai/BabUE 4GFMPSZbUG 4mi/SZbUGFA 4nI/EMPSZbU 4Ai/BabU 4IZSocGFA 4GFpC/Ii 4IE/DVMPi 4IVi 4IFaMi 4IA/Ei 4Igm/Vi 4EAIi 3YVMPQLCjY 2QLM/VA 4EABNHIJKLQ 4QLKJIHDGFMP/TH 4DBKF 4ROibUGFMP 4SHDGFMPiCK 4ORV 4NBPMFGDHNiQLKJIH 4UNiQLKJDVM 4pq/US 4US 4RA 4Ii/DB 4US/pq/JP/GQ 1ZN/oMh 1ZN/or 1rMh 0PA 3KSF 3OHA'
		],
		baseoffsxmin = -300,
		baseoffsxmax = 300,
		baseoffsymin = -600,
		baseoffsymax = 0,
		handdistmin = 0,
		handdistmax = 800,
		noplot;

	let canvas;
	let canvas2;
	let canvas3;
	let canvasb;

	const MAX_WIDTH = 960;

	onMount(() => {
		let ctx = canvas.getContext('2d');
		let ctx2 = canvas2.getContext('2d');
		let ctx3 = canvas3.getContext('2d');
		let ctxb = canvasb.getContext('2d');

		resizeCanvasToDisplaySize(canvas);
		resizeCanvasToDisplaySize(canvas2);
		resizeCanvasToDisplaySize(canvas3);
		resizeCanvasToDisplaySize(canvasb);
		let canvasWidth = canvas.width;
		let canvasHeight = canvas.height;

		let minDimension = Math.min(canvasWidth, canvasHeight);

		console.log(minDimension);

		let __Centerx = minDimension / 2,
			__Centery = minDimension / 2;

		let W = minDimension;
		let H = minDimension;
		// get with of the canvas

		let bw = minDimension / 2;
		let bh = minDimension / 2;

		canvas.width = W * M;
		canvas.height = H * M;
		canvas2.width = W * M;
		canvas2.height = H * M;
		canvas3.width = W * M;
		canvas3.height = H * M;
		canvasb.width = bw;
		canvasb.height = bh;
		canvasb.style.width = '240px';
		canvasb.style.height = '240px';

		function resizeCanvasToDisplaySize(canvas) {
			const { width, height } = canvas.getBoundingClientRect();
			if (canvas.width !== width || canvas.height !== height) {
				canvas.width = width;
				canvas.height = height;
			}
		}

		function onResize() {
			var ch = window.innerHeight;
			if (CH == ch) return;
			CH = ch;
			if (CH < minDimension / 2) CH = minDimension / 2;
			if (CH < H) {
				CW = W * (CH / H);
			} else {
				(CH = H), (CW = W);
			}
			canvas.style.width = CW + 'px';
			canvas.style.height = CH + 'px';
			canvas2.style.width = CW + 'px';
			canvas2.style.height = CH + 'px';
			canvas3.style.width = CW + 'px';
			canvas3.style.height = CH + 'px';
		}

		onResize();
		//ctx2.scale(M, M);
		//ctx3.scale(M, M);
		ctx2.globalCompositeOperation = 'screen';

		function clr() {
			ctx.fillStyle = '#000000';
			ctx.fillRect(0, 0, W * M, H * M);
			ctx.fillStyle = '#FFFFFF';
		}
		function alphafillcanvas(ctx, a) {
			var imgd = ctx.getImageData(0, 0, W * M, H * M),
				pix = imgd.data;

			for (var i = 0, n = pix.length; i < n; i += 4) {
				pix[i + 3] = pix[i + 3] * a;
			}

			ctx.putImageData(imgd, 0, 0);
		}

		function mainloop() {
			window.requestAnimationFrame(mainloop);

			if (!freeze) {
				clearmech();

				for (var i = 0; i < speed; i++) {
					calc();
					draw();
					if (i >= speed - 1) drawmech();

					__Crot = doRot(__Crot, __Crota);
					__Lrot = doRot(__Lrot, __Lrota);
					__Rrot = doRot(__Rrot, __Rrota);
					__Erot = doRot(__Erot, __Erota);
					if (freeze) break;
				}

				//drawmech();
			}
			//		jQuery("#out").html( "picrot: "+__Crot+"\nhand1rot: "+__Lrot+"\nhand2rot: "+__Rrot);

			//setTimeout( mainloop, 16 );
		}
		function doRot(rot, rota) {
			return (rot + rota + 360) % 360;
		}
		function calc() {
			handsX = __Centerx + __HBx;
			handsY = __Centery + __HBy;

			H1X = handsX - __Hdist / 2;
			H1Y = handsY;
			H2X = handsX + __Hdist / 2;
			H2Y = handsY;

			H1arm1X = Math.cos(__Lrot * AM) * __Larm1 + H1X;
			H1arm1Y = Math.sin(__Lrot * AM) * __Larm1 + H1Y;

			H2arm1X = Math.cos(__Rrot * AM) * __Rarm1 + H2X;
			H2arm1Y = Math.sin(__Rrot * AM) * __Rarm1 + H2Y;

			var dx = H2arm1X - H1arm1X,
				dy = H2arm1Y - H1arm1Y,
				D = Math.sqrt(dx * dx + dy * dy),
				gamma = Math.acos(
					(__Rarm2 * __Rarm2 + __Larm2 * __Larm2 - D * D) / (2 * __Rarm2 * __Larm2)
				),
				alpha = Math.asin(__Rarm2 / (D / Math.sin(gamma))),
				beta = Math.asin(__Larm2 / (D / Math.sin(gamma))),
				delta = Math.asin(dy / D);

			if (__Larm2 > __Rarm2) {
				beta = Math.PI - alpha - gamma;
			}
			if (__Rarm2 > __Larm2) {
				alpha = Math.PI - beta - gamma;
			}

			//jQuery("#out").html( "alpha: "+alpha+"\nbeta: "+beta+"\ngamma: "+gamma+"\ndelta: "+delta);

			var H1a = alpha + delta,
				H2a = Math.PI - (beta - delta),
				Exa = __Erot * AM;

			DRX = H1arm1X + Math.cos(H1a) * __Larm2;
			DRY = H1arm1Y + Math.sin(H1a) * __Larm2;

			DReX = H2arm1X + Math.cos(H2a) * (__Rarm2 + __Ext);
			DReY = H2arm1Y + Math.sin(H2a) * (__Rarm2 + __Ext);

			DRaX = DReX + Math.cos(H2a + Exa) * __Earm;
			DRaY = DReY + Math.sin(H2a + Exa) * __Earm;

			var nx = DRaX - __Centerx,
				ny = DRaY - __Centery,
				nd = Math.sqrt(nx * nx + ny * ny),
				na;

			if (nd == 0) {
				na = 0;
			} else {
				na = Math.asin(ny / nd);
			}

			if (nx < 0) {
				na = Math.PI - na;
			}
			//console.log( na +" - "+ nd );

			na = na + AM * __Crot;

			noplot = nd > 479 && cutpixels;
			if (noplot) nd = 479;

			FX = __Centerx + Math.cos(na) * nd;
			FY = __Centery + Math.sin(na) * nd;

			let precision = 10;
			if (firstPoint) {
				FirstX = Math.floor(FX * precision);
				FirstY = Math.floor(FY * precision);
				firstPoint = false;
			} else if (
				Math.floor(FX * precision) == FirstX &&
				Math.floor(FY * precision) == FirstY &&
				totalLength > 1
			) {
				freeze = true;
				console.log('totalLength: ' + totalLength);
				if (totalLength > 0) {
					cleandraw = false;
				}

				//FirstX = FirstY = LX = LY = undefined;
			}
		}
		function clearmech() {
			if (livedisplay) {
				//clr();

				ctx.strokeStyle = '#000000';
				ctx.lineWidth = 4;
				ctx.beginPath();
				ctx.lineCap = 'round';
				ctx.lineJoin = 'round';
				ctx.moveTo(H1X * M, H1Y * M);
				ctx.lineTo(H1arm1X * M, H1arm1Y * M);
				ctx.lineTo(DRX * M, DRY * M);
				ctx.stroke();

				ctx.beginPath();
				ctx.moveTo(H2X * M, H2Y * M);
				ctx.lineTo(H2arm1X * M, H2arm1Y * M);
				ctx.lineTo(DReX * M, DReY * M);
				ctx.lineTo(DRaX * M, DRaY * M);
				ctx.stroke();
			}
		}
		function drawmech() {
			if (livedisplay) {
				//clr();
				if (speed < 10) {
					ctx.strokeStyle = '#FFFFFF';
					ctx.lineWidth = 1 * M;
					ctx.lineCap = 'round';
					ctx.lineJoin = 'round';
					ctx.beginPath();
					ctx.moveTo(H1X * M, H1Y * M);
					ctx.lineTo(H1arm1X * M, H1arm1Y * M);
					ctx.lineTo(DRX * M, DRY * M);
					ctx.stroke();

					ctx.beginPath();
					ctx.moveTo(H2X * M, H2Y * M);
					ctx.lineTo(H2arm1X * M, H2arm1Y * M);
					ctx.lineTo(DReX * M, DReY * M);
					ctx.lineTo(DRaX * M, DRaY * M);
					ctx.stroke();
				}

				jQuery('#theBitmapOverlay').css({ transform: 'rotate(-' + __Crot + 'deg)' });
			}
		}
		function draw() {
			// make background transperent
			ctx.clearRect(0, 0, W * M, H * M);
			var lw = 1;

			if (LX) {
				var dx = FX - LX,
					dy = FY - LY,
					d = 2 * Math.sqrt(dx * dx + dy * dy);
			} else {
				var d = 0;
			}
			if (variablewidth || colormode == 3 || colormode == 4) {
				var b = brightness < 4 ? brightness : 1;
				var dd = Math.sqrt(d / b) * 1.8;
				if (dd > 15) dd = 15;
				if (dd > 0) lw = 15 / dd;
				if (lw > 5) lw = 5;
				if (lw < 1) lw = 1;
				lw = lw / 2;
			}

			switch (colormode) {
				case 0:
					var col1 = Math.sin(AM * __Lrot) * 127 + 127,
						col2 = Math.sin(AM * __Rrot) * 127 + 127,
						R = Math.floor(col1),
						G = Math.floor((col1 + col2) / 2),
						B = Math.floor(col2),
						A = (col1 + col2) / 256;
					if (A > 1) A = 1;
					break;
				case 4:
					var col1 = Math.sin(AM * __Lrot + Math.PI * 0.6666) * 127 + 127,
						col2 = Math.sin(AM * __Lrot + Math.PI * 0.3333) * 127 + 127,
						col3 = Math.sin(AM * __Lrot) * 127 + 127,
						col4 = Math.sin(AM * __Rrot + Math.PI * 0.6666) * 127 + 127,
						col5 = Math.sin(AM * __Rrot + Math.PI * 0.3333) * 127 + 127,
						col6 = Math.sin(AM * __Rrot) * 127 + 127,
						//col4 = Math.cos( AM*__Rrot )*127+127,
						R = Math.floor((col1 + col4) / 2); //*1.0 + col4*0.3 ),
					G = Math.floor((col2 + col5) / 2); //*0.6 + col5*0.6 ),
					B = Math.floor((col3 + col6) / 2); //*0.3 + col6*1.0 ),
					A = 1; //((col1 + col2)/256);
					if (A > 1) A = 1;
					break;
				case 1:
					var R = (G = B = 255),
						A = Math.sin(AM * __Rrot * 3) * Math.sin(AM * __Lrot * 3);
					break;
				case 2:
					var R = 255,
						G = 255,
						B = 0,
						A = 0.5;
					break;
				case 3:
					var B = Math.floor(0 + (lw - 0.5) * 128);
					if (B > 255) B = 255;
					//console.log( (10-d)/10 );
					var R = 255,
						G = 255,
						A = (10 - dd) / 10;
					break;
			}

			//console.log( "rgba("+R+","+G+","+B+",1)" );

			//A /= 10;
			A /= brightness > 3 ? 5 * (brightness - 2) : 1;

			if (LX) {
				if (!noplot) {
					ctx2.strokeStyle = 'rgba(' + R + ',' + G + ',' + B + ',' + A + ')'; //"#FFFF00";
					ctx2.lineWidth = lw;
					ctx2.beginPath();
					ctx2.moveTo(LX * M, LY * M);
					ctx2.lineTo(FX * M, FY * M);
					ctx2.stroke();
				}

				totalLength += d / 2;
			}
			LX = FX;
			LY = FY;
		}

		// Fonting here...
		function fix6(v) {
			return Math.round(1000000 * v) / 1000000;
		}
		// -------------- FONT
		function getchardata(chr) {
			var i = font[0].lastIndexOf(chr),
				data = [];
			if (i > -1) {
				var chdata = font[2].split(' ')[i],
					l = 0;
				data[0] = Number(chdata.substr(0, 1));
				for (var p = 0, pi; p < chdata.length; p++) {
					pi = getindex(chdata.charCodeAt(p));
					if (pi < 0) data[++l] = [];
					else data[l].push(font[1].substr(pi, 2));
				}
			} else data[0] = chr == ' ' ? 3 : -1;
			return data;
		}
		function getindex(code) {
			code -= 65;
			code > 25 && (code -= 6);
			return code * 2;
		}

		function redraw() {
			setCleandraw(true);
			alphafillcanvas(ctx2, 0);
			reset();
		}
		function reset() {
			alphafillcanvas(ctx3, 0);
			testtext();

			clearmech();
			__Crot = 0;
			__Lrot = handlrot;
			__Rrot = handrrot;
			__Erot = handerot;
			drawmech();

			jQuery('#theBitmapOverlay').css({ transform: 'none' });

			totalLength = 0;
			firstPoint = true;
			LX = LY = undefined;
			freeze = false;
		}
		function setCleandraw(clean) {
			cleandraw = clean;
			// set upload btn;
		}

		function btnclick(btn) {
			var ra = shift ? 0.01 : 0.1,
				da = shift ? 1 : 10;

			switch (btn) {
				case 'startstop':
					freeze = !freeze;
					break;
				case 'reset':
					redraw();
					break;

				case 'dim':
					alphafillcanvas(ctx2, 0.5);
					firstPoint = true;
					setCleandraw(false);
					break;

				case 'clear':
					alphafillcanvas(ctx2, 0);
					firstPoint = true;
					setCleandraw(true);
					break;

				case 'slowdown':
					__Crota /= 2;
					__Lrota /= 2;
					__Rrota /= 2;
					__Erota /= 2;
					setFormValues();
					setCleandraw(firstPoint);
					if (alt) redraw();
					break;

				case 'speedup':
					__Crota *= 2;
					__Lrota *= 2;
					__Rrota *= 2;
					__Erota *= 2;
					setFormValues();
					setCleandraw(false);
					if (alt) redraw();
					break;

				case 'zoomin':
					m = shift ? 1.1 : 1.25;
					__Hdist = Math.floor(__Hdist * m);
					__HBx = Math.floor(__HBx * m);
					__HBy = Math.floor(__HBy * m);
					__Larm1 = Math.floor(__Larm1 * m);
					__Larm2 = Math.floor(__Larm2 * m);
					__Rarm1 = Math.floor(__Rarm1 * m);
					__Rarm2 = Math.floor(__Rarm2 * m);
					__Ext = Math.floor(__Ext * m);
					setFormValues();
					setCleandraw(false);
					if (alt) redraw();
					break;

				case 'zoomout':
					m = 1 / (shift ? 1.1 : 1.25);
					__Hdist = Math.floor(__Hdist * m);
					__HBx = Math.floor(__HBx * m);
					__HBy = Math.floor(__HBy * m);
					__Larm1 = Math.floor(__Larm1 * m);
					__Larm2 = Math.floor(__Larm2 * m);
					__Rarm1 = Math.floor(__Rarm1 * m);
					__Rarm2 = Math.floor(__Rarm2 * m);
					__Ext = Math.floor(__Ext * m);
					setFormValues();
					setCleandraw(false);
					if (alt) redraw();
					break;

				case 'accelerationminus':
					speed -= 1;
					if (speed < 1) speed = 1;
					jQuery('#acceleration').val(fix6(speed));
					break;
				case 'accelerationplus':
					speed += 1;
					if (speed > 100) speed = 100;
					jQuery('#acceleration').val(fix6(speed));
					break;
				case 'rotorrpmminus':
					__Crota -= ra;
					if (__Crota < -5) __Crota = -5;
					jQuery('#rotorRPM').val(fix6(__Crota * 10));
					firstPoint = true;
					setCleandraw(false);
					if (alt) redraw();
					break;
				case 'rotorrpmplus':
					__Crota += ra;
					if (__Crota > 5) __Crota = 5;
					jQuery('#rotorRPM').val(fix6(__Crota * 10));
					firstPoint = true;
					setCleandraw(false);
					if (alt) redraw();
					break;

				case 'offsetxminus':
					__HBx -= da;
					if (__HBx < baseoffsxmin) __HBx = baseoffsxmin;
					jQuery('#baseoffsx').val(fix6(__HBx));
					firstPoint = true;
					setCleandraw(false);
					if (alt) redraw();
					break;
				case 'offsetxplus':
					__HBx += da;
					if (__HBx > baseoffsxmax) __HBx = baseoffsxmax;
					jQuery('#baseoffsx').val(fix6(__HBx));
					firstPoint = true;
					setCleandraw(false);
					if (alt) redraw();
					break;

				case 'offsetyminus':
					__HBy -= da;
					if (__HBy < baseoffsymin) __HBy = baseoffsymin;
					jQuery('#baseoffsy').val(fix6(__HBy));
					firstPoint = true;
					setCleandraw(false);
					if (alt) redraw();
					break;
				case 'offsetyplus':
					__HBy += da;
					if (__HBy > baseoffsymax) __HBy = baseoffsymax;
					jQuery('#baseoffsy').val(fix6(__HBy));
					firstPoint = true;
					setCleandraw(false);
					if (alt) redraw();
					break;

				case 'handdistminus':
					__Hdist -= da;
					if (__Hdist < handdistmin) __Hdist = handdistmin;
					__Hdist = fixdist(__Hdist);
					jQuery('#handdist').val(fix6(__Hdist));
					firstPoint = true;
					setCleandraw(false);
					if (alt) redraw();
					break;
				case 'handdistplus':
					__Hdist += da;
					if (__Hdist > handdistmax) __Hdist = handdistmax;
					__Hdist = fixdist(__Hdist);
					jQuery('#handdist').val(fix6(__Hdist));
					firstPoint = true;
					setCleandraw(false);
					if (alt) redraw();
					break;

				case 'lrpmminus':
					__Lrota -= ra;
					if (__Lrota < -5) __Lrota = -5;
					jQuery('#lrpm').val(fix6(__Lrota * 10));
					firstPoint = true;
					setCleandraw(false);
					if (alt) redraw();
					break;
				case 'lrpmplus':
					__Lrota += ra;
					if (__Lrota > 5) __Lrota = 5;
					jQuery('#lrpm').val(fix6(__Lrota * 10));
					firstPoint = true;
					setCleandraw(false);
					if (alt) redraw();
					break;

				case 'larm1minus':
					__Larm1 -= da;
					if (__Larm1 < 0) __Larm1 = 0;
					__Larm1 = fixleftarm1(__Larm1);
					jQuery('#larm1').val(fix6(__Larm1));
					firstPoint = true;
					setCleandraw(false);
					if (alt) redraw();
					break;
				case 'larm1plus':
					__Larm1 += da;
					if (__Larm1 > 300) __Larm1 = 300;
					__Larm1 = fixleftarm1(__Larm1);
					jQuery('#larm1').val(fix6(__Larm1));
					firstPoint = true;
					setCleandraw(false);
					if (alt) redraw();
					break;

				case 'larmaminus':
					handlrot -= da;
					__Lrot -= da;
					handlrot = (handlrot + 360) % 360;
					jQuery('#larma').val(handlrot);
					firstPoint = true;
					setCleandraw(false);
					if (alt) redraw();
					break;
				case 'larmaplus':
					handlrot += da;
					__Lrot += da;
					handlrot = (handlrot + 360) % 360;
					jQuery('#larma').val(handlrot);
					firstPoint = true;
					setCleandraw(false);
					if (alt) redraw();
					break;

				case 'larm2minus':
					__Larm2 -= da;
					if (__Larm2 < 0) __Larm2 = 0;
					__Larm2 = fixleftarm2(__Larm2);
					jQuery('#larm2').val(fix6(__Larm2));
					firstPoint = true;
					setCleandraw(false);
					if (alt) redraw();
					break;
				case 'larm2plus':
					__Larm2 += da;
					if (__Larm2 > 1000) __Larm2 = 1000;
					__Larm2 = fixleftarm2(__Larm2);
					jQuery('#larm2').val(fix6(__Larm2));
					firstPoint = true;
					setCleandraw(false);
					if (alt) redraw();
					break;

				case 'rrpmminus':
					__Rrota -= ra;
					if (__Rrota < -5) __Rrota = -5;
					jQuery('#rrpm').val(fix6(__Rrota * 10));
					firstPoint = true;
					setCleandraw(false);
					if (alt) redraw();
					break;
				case 'rrpmplus':
					__Rrota += ra;
					if (__Rrota > 5) __Rrota = 5;
					jQuery('#rrpm').val(fix6(__Rrota * 10));
					firstPoint = true;
					setCleandraw(false);
					if (alt) redraw();
					break;

				case 'rarm1minus':
					__Rarm1 -= da;
					if (__Rarm1 < 0) __Rarm1 = 0;
					__Rarm1 = fixrightarm1(__Rarm1);
					jQuery('#rarm1').val(fix6(__Rarm1));
					firstPoint = true;
					setCleandraw(false);
					if (alt) redraw();
					break;
				case 'rarm1plus':
					__Rarm1 += da;
					if (__Rarm1 > 300) __Rarm1 = 300;
					__Rarm1 = fixrightarm1(__Rarm1);
					jQuery('#rarm1').val(fix6(__Rarm1));
					firstPoint = true;
					setCleandraw(false);
					if (alt) redraw();
					break;

				case 'rarm2minus':
					__Rarm2 -= da;
					if (__Rarm2 < 0) __Rarm2 = 0;
					__Rarm2 = fixrightarm2(__Rarm2);
					jQuery('#rarm2').val(fix6(__Rarm2));
					firstPoint = true;
					setCleandraw(false);
					if (alt) redraw();
					break;
				case 'rarm2plus':
					__Rarm2 += da;
					if (__Rarm2 > 1000) __Rarm2 = 1000;
					__Rarm2 = fixrightarm2(__Rarm2);
					jQuery('#rarm2').val(fix6(__Rarm2));
					firstPoint = true;
					setCleandraw(false);
					if (alt) redraw();
					break;

				case 'extminus':
					__Ext -= da;
					if (__Ext < 0) __Ext = 0;
					jQuery('#rarmext').val(fix6(__Ext));
					firstPoint = true;
					setCleandraw(false);
					if (alt) redraw();
					break;
				case 'extplus':
					__Ext += da;
					if (__Ext > 600) __Ext = 600;
					jQuery('#rarmext').val(fix6(__Ext));
					firstPoint = true;
					setCleandraw(false);
					if (alt) redraw();
					break;

				case 'download':
					location.href = document.getElementById('theBitmapOverlay').toDataURL('image/png');
					//location.target = "_blank";
					//location.download = "test.png";
					break;

				case 'upload':
					if (!canupload) {
						return;
					}
					imageresize(ctx2, ctxb);
					var dataURL = document.getElementById('buffer').toDataURL('image/jpg');
					jQuery
						.ajax({
							type: 'POST',
							url: 'upload.php',
							data: { imgBase64: dataURL, params: location.hash, func: 1 }
						})
						.done(function (e) {
							console.log(e);
							var resp = e.split(',');
							if (resp[0] == 0) {
								console.log('successfull');
							} else {
								console.log('unsucessfull');
							}
						});

					//imageresize( ctx2, ctxb, 240, 240 );
					break;

				case 'random1':
					randomizer(0);
					break;

				case 'random2':
					randomizer(1);
					break;

				case 'random3':
					randomizer(2);
					break;

				case 'random4':
					randomizer(3);
					break;
			}
			updateHash();
		}

		function imageresize(sctx, dctx) {
			var simgd = sctx.getImageData(0, 0, W * M, H * M),
				spix = simgd.data,
				WW = simgd.width,
				HH = simgd.height,
				dimgd = dctx.createImageData(bw, bh),
				dpix = dimgd.data,
				pw = Math.ceil((W * M) / bw),
				ph = Math.ceil((H * M) / bh),
				m = 1.3 / (pw * ph);

			for (var y = 0, x, r, g, b, a, sy, sx, sa; y < bh; y++) {
				for (x = 0; x < bw; x++) {
					di = 4 * (bw * y + x);
					r = g = b = a = 0;
					for (sy = 0; sy < ph; sy++) {
						for (sx = 0; sx < pw; sx++) {
							si = (x * pw + sx + (y * ph + sy) * W * M) * 4;
							sa = spix[si + 3] / 255;

							r += spix[si + 0] * sa;
							g += spix[si + 1] * sa;
							b += spix[si + 2] * sa;
							//a += spix[ si+3 ];
						}
					}
					dpix[di + 0] = r * m;
					dpix[di + 1] = g * m;
					dpix[di + 2] = b * m;
					dpix[di + 3] = 255; //a*m*1.2;
				}
			}

			dctx.putImageData(dimgd, 0, 0);
		}

		function randomizer(type) {
			var tolerance = 20;

			if (type == 3) {
				var Cr, Lr, Rr, rm;

				rm = Math.random() * 5;

				Cr = Math.ceil(Math.random() * 10);
				var crmmax = Math.floor(50 / Cr);
				var crm = crmmax + 1 - Math.ceil(Math.sqrt(Math.random() * (crmmax * crmmax)));
				var add = 0;
				console.log('crm: ' + crm);
				if (crm < 4) {
					add = 1 / Math.ceil(Math.random() * (4 - crm) * 2);
					console.log('---add: ' + add);
				}
				Lr = Cr * (crm + add);

				Rr = 1 / (Math.ceil(Math.random() * 32) * (rm == 1 ? 10 : 1));

				__Crota = (Cr / 10) * (Math.random() < 0.5 ? -1 : 1);
				__Lrota = (Lr / 10) * (Math.random() < 0.5 ? -1 : 1);
				__Rrota = (Rr / 10) * (Math.random() < 0.5 ? -1 : 1);

				if (Math.random() < 0.3) {
					var t = __Crota;
					__Crota = __Lrota;
					__Lrota = t;
				}
			} else {
				__Crota = randomRPM(type, true);
				__Lrota = randomRPM(type, false);
				__Rrota = randomRPM(type, false);
			}
			handlrot = Math.floor(Math.random() * 360);

			__HBx = Math.round(Math.random() * 200 - 100);
			__HBy = Math.round(Math.random() * 350 - 500);
			__Larm1 = Math.round(Math.sqrt(Math.random()) * 150);
			__Rarm1 = Math.round(Math.sqrt(Math.random()) * 150);

			var mind = __Larm1 + __Rarm1 + 50 + tolerance,
				corr = 100 - __HBy;
			if (corr < mind) corr = mind;
			__Hdist = Math.round(Math.sqrt(Math.random()) * (corr - mind) + mind);
			var minl = (__Larm1 + __Rarm1 + __Hdist + tolerance) / 2,
				maxd = __Hdist - (__Larm1 + __Rarm1) - tolerance,
				arm = Math.round(minl + Math.random() * 100),
				d = Math.round(Math.random() * maxd);

			__Larm2 = arm;
			__Rarm2 = fixrightarm2(arm + d);

			if (type == 3 && __Larm2 > __Larm1 && Math.random() < 0.5) {
				var t = __Rrota;
				__Rrota = __Lrota;
				__Lrota = t;
			}

			__Ext = Math.round(Math.random() * 100);

			setCleandraw(true);
			redraw();
			setFormValues();
		}
		function randomRPM(type, main) {
			// eloszoris ketfele: 0-1 kozott tort ertek.
			// valamint 1-5 kozott gyors ertek..
			var r,
				rd,
				m = [1, 10, 1, 1][type];
			console.log('---');
			console.log(m);
			if (main) m *= 10;

			if (type == 2) {
				if (Math.random() < 0.4) {
					r = (1 / Math.ceil(Math.random() * 10) / 10) * (Math.random() > 0.5 ? -1 : 1);
				} else {
					r = (Math.ceil(Math.random() * 5) * Math.ceil(Math.random() * 20 - 10)) / 10;
				}
			} else {
				if (Math.random() < 0.2 && type > 0) {
					r = (1 / Math.ceil(Math.random() * 10) / 1) * (Math.random() > 0.5 ? -1 : 1);
				} else {
					r = Math.floor((Math.random() * 10 - 5) * m) / m;
				}
			}
			console.log(r);
			return r;
		}
		function setFormValues() {
			jQuery('#livedraw').prop('checked', livedisplay == true);
			jQuery('#acceleration').val(fix6(speed));
			jQuery('#rotorRPM').val(fix6(__Crota * 10));
			jQuery('#baseoffsx').val(fix6(__HBx));
			jQuery('#baseoffsy').val(fix6(__HBy));
			jQuery('#handdist').val(fix6(__Hdist));

			jQuery('#lrpm').val(fix6(__Lrota * 10));
			jQuery('#larma').val(fix6(handlrot));
			jQuery('#larm1').val(fix6(__Larm1));
			jQuery('#larm2').val(fix6(__Larm2));

			jQuery('#rrpm').val(fix6(__Rrota * 10));
			jQuery('#rarm1').val(fix6(__Rarm1));
			jQuery('#rarm2').val(fix6(__Rarm2));
			jQuery('#rarmext').val(fix6(__Ext));

			jQuery('#cutpixels').prop('checked', cutpixels == true);

			jQuery('#brgbtn' + (brightness - 1)).addClass('selected');
			jQuery('#colbtn' + colormode).addClass('selected');

			updateHash();
		}

		function UIreset() {
			jQuery('#rotorRPM').bind('enterKey', rotorRPMchange);
			jQuery('#acceleration').bind('enterKey', accelerationchange);
			jQuery('#baseoffsx').bind('enterKey', baseoffsxchange);
			jQuery('#baseoffsy').bind('enterKey', baseoffsychange);
			jQuery('#handdist').bind('enterKey', handdistchange);

			jQuery('#lrpm').bind('enterKey', lrpmchange);
			jQuery('#larma').bind('enterKey', larmachange);
			jQuery('#larm1').bind('enterKey', larm1change);
			jQuery('#larm2').bind('enterKey', larm2change);
			jQuery('#rrpm').bind('enterKey', rrpmchange);
			jQuery('#rarm1').bind('enterKey', rarm1change);
			jQuery('#rarm2').bind('enterKey', rarm2change);
			jQuery('#rarmext').bind('enterKey', rarmextchange);

			jQuery(document).keydown(onKeydown);
			jQuery(document).keyup(onKeyup);

			jQuery('input').keyup(onInputKeyup).blur(onBlur);
			jQuery('#livedraw').bind('change', livedrawChange);
			jQuery('#cutpixels').bind('change', cutpixelsChange);
		}
		var shift = false,
			alt = false;
		function onKeydown(e) {
			shift = e.shiftKey;
			alt = e.altKey;
			console.log('Shift ' + shift + ' - Alt ' + alt);
		}
		function onKeyup(e) {
			shift = e.shiftKey;
			alt = e.altKey;
			console.log('Shift ' + shift + ' - Alt ' + alt);
		}
		function onInputKeyup(e) {
			//console.log("key: "+e.keyCode+" shift: "+e.shiftKey );
			//shift = e.shiftKey;
			//shift = e.altKey;
			if (e.keyCode == 13) {
				jQuery(this).trigger('enterKey');
				updateHash();
			}
		}
		function onBlur(e) {
			jQuery(this).trigger('enterKey');
			updateHash();
		}

		function livedrawChange() {
			livedisplay = !!jQuery('#livedraw:checked').val();
			if (!livedisplay) {
				jQuery('#theBitmapOverlay').css({ transform: 'none' });
				clr();
				livespeed = speed;
				if (livespeed > nolivespeed) nolivespeed = livespeed;
				speed = nolivespeed;
			} else {
				nolivespeed = speed;
				if (nolivespeed < livespeed) livespeed = nolivespeed;
				speed = livespeed;
				if (freeze) {
					drawmech();
				}
			}
			jQuery('#acceleration').val(fix6(speed));
		}
		function cutpixelsChange() {
			cutpixels = !!jQuery('#cutpixels:checked').val();
			setCleandraw(false);
			if (alt) redraw();
		}

		function fixInput(v, setFN, def, min, max, integer) {
			if (isNaN(v)) v = def;
			if (min != undefined && v < min) v = min;
			else if (max != undefined && v > max) v = max;
			if (integer) v = Math.round(v);
			setFN(v);
			return v;
		}

		function rotorRPMchange() {
			__Crota =
				fixInput(Number(jQuery('#rotorRPM').val()), rotorRPMset, __Crota * 10, -50, 50) / 10;
			firstPoint = true;
			setCleandraw(false);
			if (alt) redraw();
		}
		function rotorRPMset(v) {
			jQuery('#rotorRPM').val(fix6(v));
		}
		function accelerationchange() {
			speed = fixInput(
				Number(jQuery('#acceleration').val()),
				accelerationset,
				speed,
				0,
				5000,
				true
			);
			//firstPoint = true;
		}
		function accelerationset(v) {
			jQuery('#acceleration').val(v);
		}

		function baseoffsxchange() {
			__HBx = fixInput(
				Number(jQuery('#baseoffsx').val()),
				baseoffsxset,
				__HBx,
				baseoffsxmin,
				baseoffsxmax
			);
			firstPoint = true;
			setCleandraw(false);
			if (alt) redraw();
		}
		function baseoffsxset(v) {
			jQuery('#baseoffsx').val(fix6(v));
		}

		function baseoffsychange() {
			__HBy = fixInput(
				Number(jQuery('#baseoffsy').val()),
				baseoffsyset,
				__HBy,
				baseoffsymin,
				baseoffsymax
			);
			firstPoint = true;
			setCleandraw(false);
			if (alt) redraw();
		}
		function baseoffsyset(v) {
			jQuery('#baseoffsy').val(fix6(v));
		}

		function handdistchange() {
			dist = fixInput(
				Number(jQuery('#handdist').val()),
				handdistset,
				__Hdist,
				handdistmin,
				handdistmax
			);
			__Hdist = fixdist(dist);
			if (__Hdist != dist) handdistset(__Hdist);
			firstPoint = true;
			setCleandraw(false);
			if (alt) redraw();
		}
		function handdistset(v) {
			jQuery('#handdist').val(fix6(v));
		}

		function lrpmchange() {
			__Lrota = fixInput(Number(jQuery('#lrpm').val()), lrpmset, __Lrota * 10, -50, 50) / 10;
			firstPoint = true;
			setCleandraw(false);
			if (alt) redraw();
		}
		function lrpmset(v) {
			jQuery('#lrpm').val(fix6(v));
		}
		function rrpmchange() {
			__Rrota = fixInput(Number(jQuery('#rrpm').val()), rrpmset, __Rrota * 10, -50, 50) / 10;
			firstPoint = true;
			setCleandraw(false);
			if (alt) redraw();
		}
		function rrpmset(v) {
			jQuery('#rrpm').val(fix6(v));
		}

		function larm1change() {
			dist = fixInput(Number(jQuery('#larm1').val()), larm1set, __Larm1, 0, 1000);
			__Larm1 = fixleftarm1(dist);
			if (__Larm1 != dist) larm1set(__Larm1);
			firstPoint = true;
			setCleandraw(false);
			if (alt) redraw();
		}
		function larm1set(v) {
			jQuery('#larm1').val(fix6(v));
		}
		function larmachange() {
			dist = Math.round(fixInput(Number(jQuery('#larma').val()), larmaset, handlrot, -360, 360));
			handlrot = (dist + 360) % 360;
			if (handlrot != dist) larmaset(handlrot);
			firstPoint = true;
			setCleandraw(false);
			if (alt) redraw();
		}
		function larmaset(v) {
			jQuery('#larma').val(fix6(v));
		}
		function larm2change() {
			dist = fixInput(Number(jQuery('#larm2').val()), larm2set, __Larm2, 0, 1000);
			__Larm2 = fixleftarm2(dist);
			if (__Larm2 != dist) larm2set(__Larm2);
			firstPoint = true;
			setCleandraw(false);
			if (alt) redraw();
		}
		function larm2set(v) {
			jQuery('#larm2').val(fix6(v));
		}

		function rarm1change() {
			dist = fixInput(Number(jQuery('#rarm1').val()), rarm1set, __Rarm1, 0, 1000);
			__Rarm1 = fixrightarm1(dist);
			if (__Rarm1 != dist) rarm1set(__Rarm1);
			firstPoint = true;
			setCleandraw(false);
			if (alt) redraw();
		}
		function rarm1set(v) {
			jQuery('#rarm1').val(fix6(v));
		}
		function rarm2change() {
			dist = fixInput(Number(jQuery('#rarm2').val()), rarm2set, __Rarm2, 0, 1000);
			__Rarm2 = fixrightarm2(dist);
			if (__Rarm2 != dist) rarm2set(__Rarm2);
			firstPoint = true;
			setCleandraw(false);
			if (alt) redraw();
		}
		function rarm2set(v) {
			jQuery('#rarm2').val(fix6(v));
		}

		function rarmextchange() {
			__Ext = fixInput(Number(jQuery('#rarmext').val()), rarmextset, __Ext, 0, 1000);
			firstPoint = true;
			setCleandraw(false);
			if (alt) redraw();
		}
		function rarmextset(v) {
			jQuery('#rarmext').val(fix6(v));
		}

		var tolerance = 2;
		function fixdist(d) {
			var maxd = __Larm2 + __Rarm2 - (__Larm1 + __Rarm1) - tolerance,
				mind = __Larm1 + __Rarm1 + Math.abs(__Larm2 - __Rarm2) + tolerance;
			if (d > maxd) d = maxd;
			if (d < mind) d = mind;

			return d;
		}
		function fixleftarm1(d) {
			var maxd = __Larm2 + __Rarm2 - (__Hdist + __Rarm1) - tolerance,
				maxd2 = __Hdist - (__Rarm1 + Math.abs(__Larm2 - __Rarm2)) - tolerance,
				mind = __Hdist - (__Larm2 + __Rarm2 + __Rarm1) + tolerance;
			maxd = maxd < maxd2 ? maxd : maxd2;
			if (d > maxd) d = maxd;
			if (d < mind) d = mind;

			return d;
		}
		function fixleftarm2(d) {
			var maxd = __Hdist - (__Larm1 + __Rarm1) + __Rarm2 - tolerance,
				mind = __Rarm2 - (__Hdist - (__Larm1 + __Rarm1)) + tolerance,
				mind2 = __Hdist + __Larm1 + __Rarm1 - __Rarm2 + tolerance;
			mind = mind > mind2 ? mind : mind2;
			if (d > maxd) d = maxd;
			if (d < mind) d = mind;

			return d;
		}
		function fixrightarm1(d) {
			var maxd = __Larm2 + __Rarm2 - (__Hdist + __Larm1) - tolerance,
				maxd2 = __Hdist - (__Larm1 + Math.abs(__Larm2 - __Rarm2)) - tolerance,
				mind = __Hdist - (__Larm2 + __Rarm2 + __Larm1) + tolerance;
			maxd = maxd < maxd2 ? maxd : maxd2;
			if (d > maxd) d = maxd;
			if (d < mind) d = mind;

			return d;
		}
		function fixrightarm2(d) {
			var maxd = __Hdist - (__Larm1 + __Rarm1) + __Larm2 - tolerance,
				mind = __Larm2 - (__Hdist - (__Larm1 + __Rarm1)) + tolerance,
				mind2 = __Hdist + __Larm1 + __Rarm1 - __Larm2 + tolerance;
			mind = mind > mind2 ? mind : mind2;
			if (d > maxd) d = maxd;
			if (d < mind) d = mind;

			return d;
		}

		function parseHash(h, go) {
			h = h || location.hash;
			/*if( !h ) h="#200,200,100,6,1,0,0,4,1,8,2,4,27,-90,0,0,16,4,4,27,-60,1,1,12,1,12,20,-60,2,0,60,5,12,20,0,0,0,2,-563";*/
			if (h) {
				var t = h.substr(1),
					CRC = 0,
					CRC2 = 0;

				//if( t=="clear" ) return false;

				t = t.split(',');

				for (var i = 0; i < t.length - 1; i++) {
					CRC += Number(t[i]);
					CRC2 = Math.sin(Number(t[i])) * 100 - CRC2;
				}
				if (t[i] != Math.ceil((CRC % 800) + CRC2 * 2)) {
					updateHash();
					return false; // Wrong CRC
				}

				var i = 0,
					gs,
					g = function () {
						return Number(t[i++]);
					};
				if (go) {
					g();
					g();
				} else {
					livedisplay = g() == 1;
					speed = g();
				}
				jQuery('#colbtn' + colormode).removeClass('selected'); //Ugly bwheehh:(
				jQuery('#brgbtn' + (brightness - 1)).removeClass('selected');

				colormode = g();
				cutpixels = g() == 1;
				brightness = g();

				__Crota = g();
				__HBx = g();
				__HBy = g();
				__Hdist = g();
				__Lrota = g();
				__Larm1 = g();
				__Larm2 = g();
				__Rrota = g();
				__Rarm1 = g();
				__Rarm2 = g();
				__Ext = g();
				handlrot = g();

				console.log('hash parsed successfully');

				setFormValues();

				if (go) {
					setCleandraw(cleandraw);
					if (alt) {
						redraw();
					} else {
						reset();
					}
				}

				return true;
			} //*/
			return false;
		}

		function updateHash() {
			var h = '',
				S = ',',
				CRC = 0,
				CRC2 = 0,
				g = function (n) {
					h += n + S;
					CRC += Number(n);
					CRC2 = Math.sin(Number(n)) * 100 - CRC2;
				};
			g(livedisplay ? 1 : 0);
			g(speed);
			g(colormode);
			g(cutpixels ? 1 : 0);
			g(brightness);

			g(__Crota);
			g(__HBx);
			g(__HBy);
			g(__Hdist);
			g(__Lrota);
			g(__Larm1);
			g(__Larm2);
			g(__Rrota);
			g(__Rarm1);
			g(__Rarm2);
			g(__Ext);
			g(handlrot); // for future use
			g(0);
			g(1); // version
			h += Math.ceil((CRC % 800) + CRC2 * 2);
			location.hash = '#' + h;
		}
		function onHashChange(e) {
			parseHash();
			redraw();
		}

		function resizeCanvasToDisplaySize(canvas) {
			// look up the size the canvas is being displayed
			const { width, height } = canvas.getBoundingClientRect();

			// adjust canvas's buffer size to match
			if (canvas.width !== width || canvas.height !== height) {
				canvas.width = width;
				canvas.height = height;
				return true; // here you can return some useful information like whether the canvas was resized or not
			}

			return false;
		}

		jQuery(function () {
			// start loop!
			jQuery(window).bind('resize', onResize);
			//jQuery(window).bind('hashchange', onHashChange );
			setCleandraw(true);
			if (!parseHash()) setFormValues();
			clr();
			window.requestAnimationFrame = (function () {
				return (
					window.requestAnimationFrame ||
					window.webkitRequestAnimationFrame ||
					window.mozRequestAnimationFrame ||
					function (callback) {
						window.setTimeout(callback, 100 / 6);
					}
				);
			})();
			mainloop();
			testtext();
			UIreset();

			//reset();
			jQuery('p.title').each(function () {
				replaceWithSVGText(jQuery(this), true, 6, 6);
			});
			replaceWithSVGText(jQuery('#footer a'), true, 1, 1);
		});
	});
</script>

<div class="bg-transparent w-full aspect-square">
	<canvas bind:this={canvas} class="bg-transparent w-full h-full object-contain" />
	<canvas bind:this={canvas2} class="bg-transparent w-full h-full object-contain" />
	<canvas bind:this={canvas3} class="bg-transparent w-full h-full object-contain" />
	<canvas id="buffer" class="bg-transparent w-full h-full" bind:this={canvasb} />
</div>

<style>
	canvas {
		position: absolute;
		top: 0;
		left: 0;
	}

	#buffer {
		display: none;
	}
</style>
