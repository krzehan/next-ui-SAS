// run this application before next app
var topologyData = {
	"nodes": [
		/*{"id": 0, "x": 410, "y": 100, "name": "12K-1"},
		{"id": 1, "x": 410, "y": 280, "name": "12K-2"},
		{"id": 2, "x": 660, "y": 280, "name": "Of-9k-03"},
		{"id": 3, "x": 660, "y": 100, "name": "Of-9k-02"},
		{"id": 4, "x": 180, "y": 190, "name": "Of-9k-01"}*/
	],
	"links": [
		/*{"id": 0, "source": 0, "target": 1},
		{"id": 1, "source": 1, "target": 2},
		{"id": 2, "source": 1, "target": 3},
		{"id": 3, "source": 4, "target": 1},
		{"id": 4, "source": 2, "target": 3},
		{"id": 5, "source": 2, "target": 0},
		{"id": 6, "source": 3, "target": 0},
		{"id": 7, "source": 3, "target": 0},
		{"id": 8, "source": 3, "target": 0},
		{"id": 9, "source": 0, "target": 4},
		{"id": 10, "source": 0, "target": 4},
		{"id": 11, "source": 0, "target": 3}*/
	]
};


var http = require('http');

var server = http.createServer(
			function (request, response) {

				/*if (request.method === 'GET' && requset.url === '/plusplus') {
					const { headers, method, url } = request;*/
					server.on('request',
						function (stream) {
							if(request.url === '/plusplus') {
								var newNodeId = topologyData.nodes.length;
								topologyData.nodes.push(
									{
										id: newNodeId,
										x: Math.floor(Math.random() * 800 + 10),
										y: Math.floor(Math.random() * 400 + 10),
										name: 'generated-node-' + topologyData.nodes.length
									}
								)

								topologyData.links.push(
									{
										id: topologyData.links.length,
										// random node's id except the new one's
										source: Math.floor(Math.random() * (newNodeId - 1)),
										target: newNodeId
									}
								)
							}


							if(request.url === '/minusminus') {
								var newNodeId = topologyData.nodes.length;
								topologyData.nodes.splice()

								topologyData.links.splice()
							}


					})

				/* else {
					response.statusCode = 404;
					response.end();
				}*/

				/*let headers, method, url;
				({headers, method, url} = req);
				let body = [];
				request.on('error', (err) => {
					console.error(err);
				}).on('data', (chunk) => {
					body.push(chunk);
				}).on('end', () => {
					body = Buffer.concat(body).toString();
					// At this point, we have the headers, method, url and body, and can now
					// do whatever we need to in order to respond to this request.
				});*/

				response.writeHead(200,{
						'Access-Control-Allow-Origin': '*'
						}
					);
				response.end(JSON.stringify(topologyData));
											}

					);



// listener that make changes in topology as someone's connected
/*server.on( 'request',

	function (stream) {
				if(request.url === "/plusplus"){
				var newNodeId = topologyData.nodes.length;
				topologyData.nodes.push(
				{
					id: newNodeId,
					x: Math.floor(Math.random() * 800 + 10),
					y: Math.floor(Math.random() * 400 + 10),
					name: 'generated-node-'+topologyData.nodes.length
				}
				)

				topologyData.links.push(
				{
					id: topologyData.links.length,
					// random node's id except the new one's
					source: Math.floor(Math.random() * (newNodeId-1)),
						target: newNodeId
				}
				)
			}}
	);*/



server.listen(5555)

