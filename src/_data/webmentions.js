const API_ORIGIN = 'https://webmention.io/api/mentions.jf2';

module.exports = async function () {
  const domain = 'danmatthew.co.uk';
  const token = process.env.WEBMENTION_IO_TOKEN;
  const url = `${API_ORIGIN}?domain=${domain}&token=${token}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const feed = await response.json();
      return feed;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};
