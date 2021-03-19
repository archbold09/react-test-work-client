
// const options = [
//     "None",
//     "Atria",
//     "Callisto",
//     "Dione",
//     "Ganymede",
//     "Hangouts Call",
//     "Luna",
//     "Oberon",
//     "Phobos",
//     "Pyxis",
//     "Sedna",
//     "Titania",
//     "Triton",
//     "Umbriel",
//   ];
  
//   const ITEM_HEIGHT = 48;
// const handleClick1 = (event) => {
//     setAnchorEl1(event.currentTarget);
//   };

//   const handleClose1 = () => {
//     setAnchorEl1(null);
//   };

//   const open = Boolean(anchorEl1);
//   const handleClick2 = (event) => {
//     setAnchorEl2(event.currentTarget);
//   };

//   const handleClose2 = () => {
//     setAnchorEl2(null);
//   };
{/* <div className={classes.margin}>
<Grid container spacing={1} alignItems="flex-end">
  <Grid item>
    <SearchIcon />
  </Grid>
  <Grid item>
    <TextField id="input-with-icon-grid" label="Buscar" />
  </Grid>

  <Grid item>
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick1}
      >
        <MenuIcon />
      </IconButton>
      <Menu
          id="long-menu"
          anchorEl1={anchorEl1}
          keepMounted
          open={open}
          onClose={handleClose1}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              selected={option === "Pyxis"}
              onClick={handleClose1}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
    </div>
  </Grid>
  <Grid item>
    <Button
      aria-controls="simple-menu"
      aria-haspopup="true"
      onClick={handleClick2}
    >
      Ordenar
      <ArrowForwardIosIcon className={classes.iconArrow} />
    </Button>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl2}
      keepMounted
      open={Boolean(anchorEl2)}
      onClose={handleClose2}
    >
      <MenuItem onClick={handleClose2}>Profile</MenuItem>
      <MenuItem onClick={handleClose2}>My account</MenuItem>
      <MenuItem onClick={handleClose2}>Logout</MenuItem>
    </Menu>
  </Grid>
</Grid>
</div> */}