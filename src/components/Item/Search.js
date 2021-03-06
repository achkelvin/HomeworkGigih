import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const SearchForm = ({ onSubmit, onChange }) => {
    return (
        <div >
            <form onSubmit={onSubmit}>
                <input onChange={onChange} />
                <br></br> <br></br>
                <Button type="submit" value="Submit" variant="contained" color="success" startIcon={<SearchIcon />}> SEARCH </Button>
            </form>
        </div>
  )
}

export default SearchForm;