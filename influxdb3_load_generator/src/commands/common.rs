use clap::Parser;
use secrecy::Secret;
use url::Url;

#[derive(Debug, Parser)]
pub(crate) struct InfluxDb3Config {
    /// The host URL of the running InfluxDB 3.0 server
    #[clap(
        short = 'h',
        long = "host",
        env = "INFLUXDB3_HOST_URL",
        default_value = "http://127.0.0.1:8181"
    )]
    pub(crate) host_url: Url,

    /// The database name to generate load against
    #[clap(
        short = 'd',
        long = "dbname",
        env = "INFLUXDB3_DATABASE_NAME",
        default_value = "load_test"
    )]
    pub(crate) database_name: String,

    /// The token for authentication with the InfluxDB 3.0 server
    #[clap(long = "token", env = "INFLUXDB3_AUTH_TOKEN")]
    pub(crate) auth_token: Option<Secret<String>>,
}
