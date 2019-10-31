const https = require('https');

exports.handler = async function(event, context) {
  try {
    const posts = await getPosts();
    const post = posts[Math.floor(Math.random() * posts.length)];
    const responseBody = {
      response_type: 'in_channel',
      text: 'devwithluv',
      attachments: [
        {
          text: post.url
        }
      ]
    };
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(responseBody)
    };
  } catch (e) {
    return {
      statusCode: 500
    };
  }
};

function getPosts() {
  /**
   * FIXME
   * devwithluv.dev에 아직 포스트 목록 데이터가 없어,포스트 목록 데이터를 만드는 기능의 PR 브랜치의 프리뷰 데이터를 활용
   * 머지 후 프리퓨 데이터를 바라보는 코드 삭제 필요
   */
  return fetchPosts('https://devwithluv.dev/posts.json').catch(() =>
    fetchPosts(
      'https://deploy-preview-14--relaxed-gates-561cee.netlify.com/posts.json'
    )
  );
}

function fetchPosts(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, res => {
        const { statusCode } = res;
        if (statusCode !== 200) {
          reject(new Error('not 200'));
        }

        let rawData = '';
        res.on('data', chunk => {
          rawData += chunk;
        });
        res.on('end', () => {
          try {
            const parsedData = JSON.parse(rawData);
            resolve(parsedData);
          } catch (e) {
            reject(e);
          }
        });
      })
      .on('error', e => {
        reject(e);
      });
  });
}
