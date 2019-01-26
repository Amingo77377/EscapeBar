export class Container extends React.Component {
    render() {
        const style = {
            width: '100vw',
            height: '100vh'
        }
        return (
            <div style={style}>
              <Map google={this.props.google}
                />
            </div>
        )
    }
}
  
export default GoogleApiComponent({
    apiKey: 'AIzaSyBkwdLLMRVXuU7Bzc5zF-sv4ocxizjstEk'
})(Container)